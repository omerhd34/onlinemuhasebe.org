import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    console.log("📩 API endpoint'e istek geldi");
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log("📩 Form data:", { name, email, subject });

    if (!name || !email || !message) {
      console.log("❌ Eksik alan");
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const emailConfig = {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      to: process.env.EMAIL_TO,
    };

    console.log("🔧 Email config:", {
      host: emailConfig.host,
      port: emailConfig.port,
      user: emailConfig.user,
      hasPass: !!emailConfig.pass,
      to: emailConfig.to,
    });

    if (!emailConfig.host || !emailConfig.user || !emailConfig.pass) {
      console.error("❌ Email yapılandırması eksik!");
      return NextResponse.json(
        { error: "Email yapılandırması eksik." },
        { status: 500 }
      );
    }

    const configs = [
      {
        host: "smtp.yandex.com",
        port: 465,
        secure: true,
        auth: {
          user: emailConfig.user,
          pass: emailConfig.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      {
        host: "smtp.yandex.com",
        port: 587,
        secure: false,
        auth: {
          user: emailConfig.user,
          pass: emailConfig.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    ];

    let transporter = null;
    let lastError = null;

    for (let i = 0; i < configs.length; i++) {
      try {
        console.log(
          `🔌 Konfigürasyon ${i + 1} deneniyor (Port: ${configs[i].port})...`
        );
        const testTransporter = nodemailer.createTransport(configs[i]);
        await testTransporter.verify();
        console.log(`✅ Konfigürasyon ${i + 1} başarılı!`);
        transporter = testTransporter;
        break;
      } catch (error) {
        console.error(`❌ Konfigürasyon ${i + 1} başarısız:`, error.message);
        lastError = error;
      }
    }

    if (!transporter) {
      console.error("❌ Hiçbir SMTP konfigürasyonu çalışmadı:", lastError);
      return NextResponse.json(
        {
          error:
            "Email sunucusuna bağlanılamadı. Lütfen daha sonra tekrar deneyin.",
          details:
            process.env.NODE_ENV === "development"
              ? lastError?.message
              : undefined,
        },
        { status: 500 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #1f2937; }
          .field-value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #2563eb; }
          .footer { margin-top: 20px; padding: 15px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 5px 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header"><h2>Yeni İletişim Formu Mesajı</h2></div>
          <div class="content">
            <div class="field"><div class="field-label">Ad Soyad:</div><div class="field-value">${name}</div></div>
            <div class="field"><div class="field-label">E-posta:</div><div class="field-value">${email}</div></div>
            <div class="field"><div class="field-label">Konu:</div><div class="field-value">${
              subject || "Belirtilmemiş"
            }</div></div>
            <div class="field"><div class="field-label">Mesaj:</div><div class="field-value">${message.replace(
              /\n/g,
              "<br>"
            )}</div></div>
          </div>
          <div class="footer">
            <p>Bu mesaj <b>Şahin Demir Mali Müşavirlik</b> web sitesindeki iletişim formundan gönderilmiştir.</p>
            <p>Gönderilme Tarihi: ${new Date().toLocaleString("tr-TR")}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name} (Web Formu)" <${emailConfig.user}>`,
      to: emailConfig.to,
      replyTo: email,
      subject: `İletişim Formu: ${subject || "Yeni Mesaj"}`,
      html: htmlContent,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${
        subject || "Belirtilmemiş"
      }\n\nMesaj:\n${message}\n\n---\nBu mesaj Şahin Demir Mali Müşavirlik web sitesinden gönderilmiştir.\nTarih: ${new Date().toLocaleString(
        "tr-TR"
      )}`,
    };

    console.log("📧 Email gönderiliyor...");
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email başarıyla gönderildi!");
    console.log("🆔 Message ID:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi.",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Hata:", error);
    return NextResponse.json(
      {
        error: "Mesaj gönderilirken bir hata oluştu.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

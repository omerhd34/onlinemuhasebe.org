import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log("📩 Form data received:", { name, email, subject });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }
    if (
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      console.error("❌ Email configuration missing:", {
        host: !!process.env.EMAIL_HOST,
        user: !!process.env.EMAIL_USER,
        pass: !!process.env.EMAIL_PASS,
        to: !!process.env.EMAIL_TO,
      });
      return NextResponse.json(
        {
          error:
            "Email yapılandırması eksik. Lütfen yöneticiyle iletişime geçin.",
        },
        { status: 500 }
      );
    }

    console.log("🔧 Creating transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_PORT === "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      console.log("🔌 Verifying SMTP connection...");
      await transporter.verify();
      console.log("✅ SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("❌ SMTP verification failed:", verifyError);
      return NextResponse.json(
        {
          error:
            "Email sunucusu bağlantısı başarısız. Lütfen yapılandırmayı kontrol edin.",
          details:
            process.env.NODE_ENV === "development"
              ? verifyError.message
              : undefined,
        },
        { status: 500 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #2563eb;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: #f9fafb;
            padding: 20px;
            border: 1px solid #e5e7eb;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            color: #1f2937;
          }
          .field-value {
            margin-top: 5px;
            padding: 10px;
            background-color: white;
            border-left: 3px solid #2563eb;
          }
          .footer {
            margin-top: 20px;
            padding: 15px;
            background-color: #f3f4f6;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border-radius: 0 0 5px 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Yeni İletişim Formu Mesajı</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Ad Soyad:</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">E-posta:</div>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <div class="field-label">Konu:</div>
              <div class="field-value">${subject || "Belirtilmemiş"}</div>
            </div>
            <div class="field">
              <div class="field-label">Mesaj:</div>
              <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
            </div>
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
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "sahin@onlinemuhasebe.org",
      replyTo: email,
      subject: `İletişim Formu: ${subject || "Yeni Mesaj"}`,
      html: htmlContent,
      text: `
Ad Soyad: ${name}
E-posta: ${email}
Konu: ${subject || "Belirtilmemiş"}

Mesaj:
${message}

---
Bu mesaj Şahin Demir Mali Müşavirlik web sitesindeki iletişim formundan gönderilmiştir.
      `,
    };

    console.log("📧 Sending email...");
    console.log("  From:", mailOptions.from);
    console.log("  To:", mailOptions.to);
    console.log("  Subject:", mailOptions.subject);

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");
    console.log("📧 To:", process.env.EMAIL_TO);
    console.log("📨 From:", process.env.EMAIL_USER);
    console.log("🆔 Message ID:", info.messageId);
    console.log("📊 Response:", info.response);
    console.log("🎉 Email accepted by server!");

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ E-posta gönderme hatası:", error);
    console.error("❌ Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    return NextResponse.json(
      {
        error:
          "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

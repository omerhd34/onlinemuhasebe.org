import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları doldurun." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçersiz email adresi." },
        { status: 400 }
      );
    }

    const emailConfig = {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      to: process.env.EMAIL_TO,
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
    };

    if (!emailConfig.user || !emailConfig.pass || !emailConfig.to) {
      return NextResponse.json(
        {
          error: "Email yapılandırması eksik.",
          details:
            "EMAIL_USER, EMAIL_PASS veya EMAIL_TO environment değişkenleri eksik",
        },
        { status: 500 }
      );
    }

    const transporterConfig = {
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.port === 465,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass.replace(/\s/g, ""),
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000,
      debug: process.env.NODE_ENV === "development",
    };

    const transporter = nodemailer.createTransport(transporterConfig);

    try {
      await transporter.verify();
    } catch (verifyError) {
      return NextResponse.json(
        {
          error: "Gmail sunucusuna bağlanılamadı.",
          details: verifyError.message,
          hint: "Uygulama şifrenizi kontrol edin ve 2 adımlı doğrulamanın açık olduğundan emin olun.",
        },
        { status: 500 }
      );
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6; 
            color: #333; 
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 40px 20px; 
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header .emoji {
            font-size: 48px;
            margin-bottom: 10px;
          }
          .content { 
            padding: 40px 30px;
          }
          .field { 
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
          }
          .field:last-child {
            border-bottom: none;
          }
          .field-label { 
            font-weight: 600; 
            color: #4b5563;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
          }
          .field-label .icon {
            margin-right: 6px;
            font-size: 16px;
          }
          .field-value { 
            padding: 14px;
            background-color: #f9fafb;
            border-radius: 8px;
            color: #1f2937;
            word-wrap: break-word;
            border-left: 3px solid #667eea;
          }
          .footer { 
            padding: 30px;
            background-color: #f9fafb;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            margin: 8px 0;
          }
          .footer strong {
            color: #4b5563;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            background-color: #10b981;
            color: white;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="emoji">📬</div>
            <h2>Yeni İletişim Mesajı</h2>
            <div class="badge">Web Formu</div>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">
                <span class="icon">👤</span> Ad Soyad
              </div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">
                <span class="icon">📧</span> E-posta Adresi
              </div>
              <div class="field-value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">
                <span class="icon">📝</span> Konu
              </div>
              <div class="field-value">${subject || "Belirtilmemiş"}</div>
            </div>
            <div class="field">
              <div class="field-label">
                <span class="icon">💬</span> Mesaj İçeriği
              </div>
              <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p><strong>⚡ Şahin Demir Mali Müşavirlik</strong></p>
            <p>Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.</p>
            <p style="margin-top: 15px;">
              📅 <strong>Gönderim Tarihi:</strong><br>
              ${new Date().toLocaleString("tr-TR", {
                timeZone: "Europe/Istanbul",
                dateStyle: "full",
                timeStyle: "medium",
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name} - Web Formu" <${emailConfig.user}>`,
      to: emailConfig.to,
      replyTo: email,
      subject: `🔔 Yeni Mesaj: ${subject || name}`,
      html: htmlContent,
      text: `
ŞAHİN DEMİR MALİ MÜŞAVİRLİK - YENİ İLETİŞİM MESAJI

Ad Soyad: ${name}
E-posta: ${email}
Konu: ${subject || "Belirtilmemiş"}

Mesaj:
${message}

---
Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.
Tarih: ${new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}
Cevap vermek için direkt ${email} adresine mail atabilirsiniz.
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message:
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapılacaktır.",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    let errorDetails = error.message;
    if (
      error.message.includes("Invalid login") ||
      error.message.includes("Invalid credentials")
    ) {
      errorDetails =
        "Gmail giriş bilgileri hatalı. Uygulama şifresini kontrol edin.";
    } else if (error.message.includes("Username and Password not accepted")) {
      errorDetails =
        "Gmail 2 Adımlı Doğrulama açık olmalı ve uygulama şifresi kullanılmalı.";
    } else if (error.message.includes("self-signed certificate")) {
      errorDetails = "SSL sertifika hatası.";
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      errorDetails = "Gmail sunucusuna bağlantı zaman aşımına uğradı.";
    }

    return NextResponse.json(
      {
        error: "Mesaj gönderilirken bir hata oluştu.",
        details: errorDetails,
        errorType: error.name,
        errorCode: error.code,
      },
      { status: 500 }
    );
  }
}

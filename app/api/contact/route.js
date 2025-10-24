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

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: process.env.EMAIL_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject || "Belirtilmemiş"}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
      <hr>
      <p>Bu mesaj Şahin Demir Mali Müşavirlik web sitesi iletişim formundan gönderilmiştir.</p>
    `;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "sahin@onlinemuhasebe.org",
      subject: `İletişim Formu: ${subject || "Yeni Mesaj"}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return NextResponse.json(
      {
        error:
          "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}

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
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject || "Belirtilmemiş"}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
      <hr>
      <p>Bu mesaj <b>Şahin Demir Mali Müşavirlik</b> web sitesindeki iletişim formundan gönderilmiştir.</p>
    `;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `İletişim Formu: ${subject || "Yeni Mesaj"}`,
      html: htmlContent,
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

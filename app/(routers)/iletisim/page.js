"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success(
        "Mesaj gönderildi! Şahin Demir en kısa sürede sizinle iletişime geçecek."
      );

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Bize Mesaj Gönderin - Sol */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Bize Mesaj Gönderin</h2>
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Ad Soyad:
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Adınız ve soyadınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email:
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email adresiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="subject" className="mb-2 block">
                Konu:
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Mesaj konusu"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="message" className="mb-2 block">
                Mesaj:
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Mesajınızı buraya yazın"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-32 resize-none overflow-y-auto"
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </form>
        </section>

        {/* Muhasebe Bilgileri - Sağ */}
        <section className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">İletişim</h1>
          <p>
            Şahin Demir Mali Müşavirlik olarak siz değerli müşterilerimize
            finansal ve muhasebe danışmanlığı sunmaktayız. Her türlü vergi,
            finans ve muhasebe konularında bizimle iletişime geçebilirsiniz.
          </p>
          <div className="space-y-1">
            <p>
              <strong>Adres:</strong> Y.Dudullu Mh. Alemdağ Cd. Dalçık İş
              Merkezi N:806 K:4/14 Ümraniye/İSTANBUL
            </p>
            <p>
              <strong>Telefon:</strong> 0216 330 77 70
            </p>
            <p>
              <strong>Email:</strong> sahin@onlinemuhasebe.org
            </p>
            <p>
              <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 09:00 - 18:00
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

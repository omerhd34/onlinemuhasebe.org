"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, RotateCcw } from "lucide-react";

export default function ContactForm({ onSuccess }) {
 const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
 const [loading, setLoading] = useState(false);

 const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
   const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
   });
   const data = await res.json();
   if (!res.ok) throw new Error(data.error || data.details || "Beklenmedik bir hata oluştu");
   toast.success("Mesajınız iletildi! Şahin Demir en kısa sürede sizinle iletişime geçecektir.");
   onSuccess?.();
  } catch (err) {
   console.error("Form gönderme hatası:", err);
   toast.error(`Mesaj gönderilemedi: ${err.message}. Lütfen direkt email adresini kullanmayı deneyin.`);
  } finally {
   setLoading(false);
  }
 };

 return (
  <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-border/60 dark:border-2 dark:border-border/80 hover:shadow-xl transition-all duration-300 h-full">
   <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-foreground dark:text-foreground flex items-center">
    Bize Mesaj Gönderin
   </h2>
   <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
    {[
     { id: "name", label: "Ad Soyad", placeholder: "Adınız ve soyadınız", required: true },
     { id: "email", label: "Email", placeholder: "Email adresiniz", type: "email", required: true },
     { id: "subject", label: "Konu", placeholder: "Mesaj konusu", required: false },
    ].map((field) => (
     <div key={field.id}>
      <Label htmlFor={field.id} className="mb-2 block text-sm sm:text-base md:text-lg font-semibold text-foreground dark:text-foreground">
       {field.label}: {field.id === "subject" && <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground">(Opsiyonel)</span>}
      </Label>
      <Input
       id={field.id}
       name={field.id}
       type={field.type || "text"}
       placeholder={field.placeholder}
       value={formData[field.id]}
       onChange={handleChange}
       required={field.required}
       className="bg-background dark:bg-background text-foreground dark:text-foreground border border-border dark:border-border focus:border-primary focus:ring focus:ring-primary/20 transition text-xs sm:text-sm md:text-base"
      />
     </div>
    ))}

    <div>
     <Label htmlFor="message" className="mb-2 block text-sm sm:text-base md:text-lg font-semibold text-foreground dark:text-foreground">Mesaj:</Label>
     <Textarea
      id="message"
      name="message"
      placeholder="Mesajınızı buraya yazın"
      value={formData.message}
      onChange={handleChange}
      required
      className="h-32 resize-none bg-background dark:bg-background text-foreground dark:text-foreground border border-border dark:border-border focus:border-primary focus:ring focus:ring-primary/20 transition text-xs sm:text-sm md:text-base"
     />
    </div>

    <Button
     type="submit"
     disabled={loading}
     className="w-full bg-linear-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transition-all duration-300"
    >
     {loading ? (
      <span className="flex items-center justify-center">
       <RotateCcw className="mr-2 h-4 w-4 animate-spin" /> Gönderiliyor...
      </span>
     ) : "Gönder"}
    </Button>
   </form>
  </div>
 );
}

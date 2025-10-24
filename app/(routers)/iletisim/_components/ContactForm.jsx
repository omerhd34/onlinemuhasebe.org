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
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
   <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 flex items-center">
    <Send className="mr-2 text-primary" size={24} /> Bize Mesaj Gönderin
   </h2>
   <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
    {[
     { id: "name", label: "Ad Soyad", placeholder: "Adınız ve soyadınız", required: true },
     { id: "email", label: "Email", placeholder: "Email adresiniz", type: "email", required: true },
     { id: "subject", label: "Konu", placeholder: "Mesaj konusu", required: false },
    ].map((field) => (
     <div key={field.id}>
      <Label htmlFor={field.id} className="mb-2 block text-gray-800 dark:text-gray-100">
       {field.label}: {field.id === "subject" && <span className="text-sm text-gray-400">(Opsiyonel)</span>}
      </Label>
      <Input
       id={field.id}
       name={field.id}
       type={field.type || "text"}
       placeholder={field.placeholder}
       value={formData[field.id]}
       onChange={handleChange}
       required={field.required}
       className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring focus:ring-primary/20 transition"
      />
     </div>
    ))}

    <div>
     <Label htmlFor="message" className="mb-2 block text-gray-800 dark:text-gray-100">Mesaj:</Label>
     <Textarea
      id="message"
      name="message"
      placeholder="Mesajınızı buraya yazın"
      value={formData.message}
      onChange={handleChange}
      required
      className="h-32 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring focus:ring-primary/20 transition"
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

"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
export default function ContactPage() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
 });
 const [loading, setLoading] = useState(false);
 const [submitted, setSubmitted] = useState(false);
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
   setSubmitted(true);
   setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
   toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
  } finally {
   setLoading(false);
  }
 };
 return (
  <div className="container mx-auto py-12 px-4 md:px-8">
   <div className="flex flex-col md:flex-row gap-12">
    <section className="flex-1">
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
       <Send className="mr-2 text-blue-600" size={24} /> Bize Mesaj
       Gönderin
      </h2>
      {submitted ? (
       <div className="flex flex-col items-center justify-center py-12">
        <CheckCircle className="text-green-500 mb-4" size={64} />
        <h3 className="text-xl font-semibold mb-2">
         Mesajınız Başarıyla Gönderildi!
        </h3>
        <p className="text-gray-600 text-center">
         En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz!
        </p>
       </div>
      ) : (
       <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <div>
         <Label htmlFor="name" className="mb-2 block text-gray-700">
          Ad Soyad:
         </Label>
         <Input
          id="name"
          name="name"
          placeholder="Adınız ve soyadınız"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
         />
        </div>
        <div>
         <Label htmlFor="email" className="mb-2 block text-gray-700">
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
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
         />
        </div>
        <div>
         <Label htmlFor="subject" className="mb-2 block text-gray-700">
          Konu:
         </Label>
         <Input
          id="subject"
          name="subject"
          placeholder="Mesaj konusu"
          value={formData.subject}
          onChange={handleChange}
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
         />
        </div>
        <div>
         <Label htmlFor="message" className="mb-2 block text-gray-700">
          Mesaj:
         </Label>
         <Textarea
          id="message"
          name="message"
          placeholder="Mesajınızı buraya yazın"
          value={formData.message}
          onChange={handleChange}
          required
          className="h-32 resize-none overflow-y-auto border-gray-300 focus:border-blue-500 focus:ring-blue-500"
         />
        </div>
        <Button
         type="submit"
         disabled={loading}
         className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
         {loading ? "Gönderiliyor..." : "Gönder"}
        </Button>
       </form>
      )}
      <div className="mt-8">
       <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-800 mb-2">
         Hizmetlerimiz:
        </h3>
        <ul className="text-sm text-blue-700 space-y-1">
         <li>• Vergi Danışmanlığı</li> <li>• Muhasebe Hizmetleri</li>
         <li>• Finansal Analiz</li> <li>• Yatırım Danışmanlığı</li>
        </ul>
       </div>
      </div>
     </div>
    </section>
    <section className="flex-1">
     <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">İletişim</h1>
      <div className="mb-8">
       <p className="text-gray-600">
        Şahin Demir Mali Müşavirlik olarak siz değerli müşterilerimize
        finansal ve muhasebe danışmanlığı sunmaktayız. Her türlü vergi,
        finans ve muhasebe konularında bizimle iletişime geçebilirsiniz.
       </p>
      </div>
      <div className="space-y-4">
       <div className="flex items-start">
        <MapPin className="text-blue-600 mr-3 mt-1 " size={20} />
        <div>
         <h3 className="font-semibold text-gray-800">Adres:</h3>
         <p className="text-gray-600"> İSTANBUL </p>
        </div>
       </div>
       <div className="flex items-start">
        <Phone className="text-blue-600 mr-3 mt-1 " size={20} />
        <div>
         <h3 className="font-semibold text-gray-800">Telefon:</h3>
         <p className="text-gray-600">0216 330 77 70</p>
        </div>
       </div>
       <div className="flex items-start">
        <Mail className="text-blue-600 mr-3 mt-1 " size={20} />
        <div>
         <h3 className="font-semibold text-gray-800">Email:</h3>
         <p className="text-gray-600">sahin@onlinemuhasebe.org</p>
        </div>
       </div>
       <div className="flex items-start">
        <Clock className="text-blue-600 mr-3 mt-1 " size={20} />
        <div>
         <h3 className="font-semibold text-gray-800">
          Çalışma Saatleri:
         </h3>
         <p className="text-gray-600">
          Pazartesi - Cuma, 09:00 - 18:00
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
   </div>
  </div>
 );
}

"use client";
import { useState } from "react";
import SuccessMessage from "./_components/SuccessMessage";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
 const [submitted, setSubmitted] = useState(false);

 const handleSuccess = () => setSubmitted(true);
 const handleReset = () => setSubmitted(false);

 return (
  <div className="container mx-auto py-12 px-4 md:px-8">
   <div className="mb-10 text-center">
    <h1 className="text-4xl font-bold mb-4 text-foreground">
     İletişim
    </h1>
    <p className="text-lg text-muted-foreground">
     Bizimle iletişime geçmek için formu doldurabilir veya iletişim bilgilerimizi kullanabilirsiniz.
    </p>
   </div>
   {submitted && <SuccessMessage onReset={handleReset} />}
   <div className="flex flex-col md:flex-row gap-12">
    <section className="flex-1 order-2 md:order-1">
     <ContactInfo />
    </section>
    <section className="flex-1 order-1 md:order-2">
     <ContactForm onSuccess={handleSuccess} />
    </section>
   </div>
  </div>
 );
}

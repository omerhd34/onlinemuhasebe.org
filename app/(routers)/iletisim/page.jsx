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
  <div className="min-h-screen bg-background">
   <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8">
     <div className="mb-10 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
       İletişim
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
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
   </section>
  </div>
 );
}

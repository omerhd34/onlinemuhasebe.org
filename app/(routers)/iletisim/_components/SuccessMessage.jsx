import { CheckCircle } from "lucide-react";

export default function SuccessMessage({ onReset }) {
 return (
  <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 flex items-center">
   <CheckCircle className="mr-2" size={24} />
   <div className="flex-1">
    <p className="font-semibold">Mesajınız Başarıyla Gönderildi!</p>
    <p>Şahin Demir Mali Müşavirlik en kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz!</p>
   </div>
   {onReset && (
    <button onClick={onReset} className="ml-4 text-sm text-green-700 dark:text-green-200 underline">
     Yeni Mesaj Gönder
    </button>
   )}
  </div>
 );
}

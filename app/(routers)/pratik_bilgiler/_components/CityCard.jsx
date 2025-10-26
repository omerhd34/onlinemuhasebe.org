'use client';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

const CityCard = ({ title, description, afterDescription, table, link, order }) => {
 return (
  <div className="relative flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border w-full">
   <div className="bg-primary text-primary-foreground px-5 py-4 flex justify-between items-center relative">
    <div className="flex items-center gap-4">
     <div className="relative w-14 h-14 bg-linear-to-br from-primary-foreground/20 to-primary-foreground/5 rounded-xl overflow-hidden shadow-lg shrink-0 flex items-center justify-center backdrop-blur-sm border border-primary-foreground/30">
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
      <span className="relative text-2xl font-extrabold text-primary-foreground drop-shadow-lg">{order}</span>
     </div>
     <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
    </div>
    {link && (
     <Link href={link} target="_blank" className="hover:scale-110 transition-transform">
      <FaLocationArrow className="w-5 h-5 text-primary-foreground hover:text-white transition-colors" />
     </Link>
    )}
   </div>

   <div className="p-6">
    <div className="text-card-foreground text-base leading-relaxed space-y-3">
     <p className="text-justify">{description}</p>

     {afterDescription && (
      <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
       <p className="font-semibold text-primary">{afterDescription}</p>
      </div>
     )}
    </div>

    {table && (
     <div className="mt-6">
      <div className="mb-3 flex items-center gap-2">
       <div className="h-1 w-12 bg-primary rounded-full"></div>
       <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        Tablo
       </span>
      </div>
      <div className="overflow-x-auto rounded-lg border-2 border-border">
       <table className="min-w-full">
        <thead className="bg-primary/10">
         <tr>
          {table.headers.map((header, idx) => (
           <th
            key={idx}
            className="px-4 py-3 text-left text-xs font-bold text-primary uppercase tracking-wider border-b-2 border-border"
           >
            {header}
           </th>
          ))}
         </tr>
        </thead>
        <tbody className="bg-card divide-y divide-border">
         {table.rows.map((row, rowIndex) => (
          <tr
           key={rowIndex}
           className="hover:bg-muted/30 transition-colors"
          >
           {row.map((cell, cellIndex) => (
            <td
             key={cellIndex}
             className="px-4 py-3 text-sm text-card-foreground whitespace-normal"
            >
             {cell}
            </td>
           ))}
          </tr>
         ))}
        </tbody>
       </table>
      </div>
     </div>
    )}
   </div>
  </div>
 );
};

export default CityCard;
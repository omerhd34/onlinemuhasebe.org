'use client';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

const CityCard = ({ title, description, afterDescription, table, link, order, id, image }) => {
 return (
  <div
   id={`pratik-bilgi-${id}`}
   className="relative flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border w-full scroll-mt-36"
  >
   <div className="bg-primary text-primary-foreground px-3 sm:px-4 md:px-5 py-3 sm:py-4 flex justify-between items-center relative">
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
     <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-primary-foreground/20 to-primary-foreground/5 rounded-xl overflow-hidden shadow-lg shrink-0 flex items-center justify-center backdrop-blur-sm border border-primary-foreground/30">
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>
      <span className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-primary-foreground drop-shadow-lg">{order}</span>
     </div>
     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">{title}</h3>
    </div>
    {link && (
     <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform shrink-0">
      <FaLocationArrow className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground hover:text-white transition-colors" />
     </Link>
    )}
   </div>

   <div className="p-4 sm:p-5 md:p-6">
    <div className="text-card-foreground text-sm sm:text-base md:text-lg leading-relaxed space-y-3">
     <p className="text-justify">{description}</p>

     {afterDescription && (
      <div className="mt-4 p-3 sm:p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
       <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">{afterDescription}</p>
      </div>
     )}
    </div>

    {table && (
     <div className="mt-6">
      <div className="mb-3 flex items-center gap-2">
       <div className="h-1 w-12 bg-primary rounded-full"></div>
       <span className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wide">
        Tablo
       </span>
      </div>
      <div className="overflow-x-auto rounded-lg border-2 border-border">
       <table className="min-w-full text-xs sm:text-sm md:text-base">
        <thead className="bg-primary/10">
         <tr>
          {table.headers.map((header, idx) => (
           <th
            key={idx}
            className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 text-left text-xs sm:text-sm font-bold text-primary uppercase tracking-wider border-b-2 border-border"
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
             className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 text-xs sm:text-sm md:text-base text-card-foreground whitespace-normal"
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
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";

const CityCard = ({ image, title, description, afterDescription, table, link }) => {
 return (
  <div className="relative flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border w-full h-full">
   <div className="bg-primary text-primary-foreground px-5 py-3 flex justify-center items-center">
    <h3 className="text-lg font-semibold tracking-wide text-center">{title}</h3>
    {link && (
     <Link href={link} target="_blank" className="ml-2 absolute right-5">
      <FaLocationArrow className="w-5 h-5 text-primary-foreground hover:text-primary transition-colors" />
     </Link>
    )}
   </div>

   <div className={`relative w-full ${image ? 'bg-muted h-40' : 'h-0'}`}>
    {image && (
     <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-500"
      onError={(e) => {
       e.currentTarget.style.display = 'none';
      }}
     />
    )}
   </div>


   <div className="px-5 py-2 text-card-foreground text-sm leading-relaxed">
    <p>{description}</p>
   </div>

   {afterDescription && (
    <div className="px-5 py-2 text-card-foreground text-sm leading-relaxed">
     <p>{afterDescription}</p>
    </div>
   )}

   {table && (
    <div className="overflow-x-auto p-5 pt-0">
     <table className="min-w-full border border-border rounded-md">
      <thead className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wider">
       <tr>
        {table.headers.map((header, idx) => (
         <th
          key={idx}
          className="px-2 py-2 text-left border-b border-border font-medium"
         >
          {header}
         </th>
        ))}
       </tr>
      </thead>
      <tbody className="text-sm">
       {table.rows.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-accent/50 transition-colors">
         {row.map((cell, cellIndex) => (
          <td
           key={cellIndex}
           className="px-2 py-1 border-b border-border text-card-foreground"
          >
           {cell}
          </td>
         ))}
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   )}
  </div>
 );
};

export default CityCard;
'use client';
import Image from 'next/image';

const CityCard = ({ image, title, description, afterDescription, table }) => {
 return (
  <div className="relative flex flex-col bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform border border-border w-full h-full min-h-[400px]">
   <div className="bg-primary text-primary-foreground px-4 py-3 text-center">
    <h3 className="text-lg font-semibold">{title}</h3>
   </div>
   <div className="relative w-full h-52">
    {image ? (
     <Image
      src={image}
      alt={title}
      fill
      className="object-cover"
      onError={(e) => {
       e.currentTarget.style.display = 'none';
       e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
     />
    ) : null}

    <div className={`w-full h-full bg-muted flex items-center justify-center ${image ? 'hidden' : ''}`}>
     <span className="text-muted-foreground text-sm">Resim yok</span>
    </div>
   </div>

   {/* İlk açıklama */}
   <div className="px-4 py-3 text-card-foreground text-sm leading-snug">
    <p>{description}</p>
   </div>

   {/* İkinci açıklama */}
   {afterDescription && (
    <div className="p-4 pt-0 text-card-foreground text-sm leading-snug">
     <p>{afterDescription}</p>
    </div>
   )}

   {/* Tablo  */}
   {table && (
    <div className="overflow-x-auto px-4 pb-5">
     <table className="min-w-full border border-border" style={{ fontSize: '0.7rem' }}>
      <thead className="bg-muted">
       <tr>
        {table.headers.map((header, idx) => (
         <th
          key={idx}
          className="px-1.5 py-1 text-left text-muted-foreground border-b border-border font-semibold"
         >
          {header}
         </th>
        ))}
       </tr>
      </thead>
      <tbody>
       {table.rows.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-accent">
         {row.map((cell, cellIndex) => (
          <td
           key={cellIndex}
           className="px-1.5 py-1 border-b border-border text-card-foreground"
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
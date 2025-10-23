'use client';
import Image from 'next/image';

const CityCard = ({ image, title, description, afterDescription, table }) => {
 return (
  <div className="relative flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform ">
   <div className="bg-gray-800 text-white px-4 py-3 text-center">
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

    <div className={`w-full h-full bg-gray-300 flex items-center justify-center ${image ? 'hidden' : ''}`}>
     <span className="text-gray-500 text-sm">Resim yok</span>
    </div>
   </div>

   {/* İlk açıklama */}
   <div className="p-4 text-gray-700 text-sm leading-snug">
    <p>{description}</p>
   </div>

   {/* İkinci açıklama */}
   {afterDescription && (
    <div className="p-4 pt-2 text-gray-700 text-sm leading-snug">
     <p>{afterDescription}</p>
    </div>
   )}

   {/* Tablo  */}
   {table && (
    <div className="overflow-x-auto px-4 pb-2">
     <table className="min-w-full border border-gray-300" style={{ fontSize: '0.7rem' }}>
      <thead className="bg-gray-100">
       <tr>
        {table.headers.map((header, idx) => (
         <th
          key={idx}
          className="px-1.5 py-1 text-left text-gray-600 border-b border-gray-300 font-semibold"
         >
          {header}
         </th>
        ))}
       </tr>
      </thead>
      <tbody>
       {table.rows.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-50">
         {row.map((cell, cellIndex) => (
          <td
           key={cellIndex}
           className="px-1.5 py-1 border-b border-gray-300"
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
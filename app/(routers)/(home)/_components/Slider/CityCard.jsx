'use client';
import Image from 'next/image';

const CityCard = ({ image, title, description, table }) => {
 return (
  <div className="relative flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform ">
   <div className="bg-gray-800 text-white px-4 py-3">
    <h3 className="text-lg font-semibold truncate">{title}</h3>
   </div>

   <div className="relative w-full h-52">
    {image ? (
     <Image
      src={image}
      alt={title}
      fill
      className="object-cover"
     />
    ) : (
     <div className="w-full h-full bg-gray-300 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Resim yok</span>
     </div>
    )}
   </div>


   <div className="p-4 text-gray-700 text-sm leading-snug">
    <p>{description}</p>
   </div>

   {table && (
    <div className="overflow-x-auto mt-4">
     <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
       <tr>
        {table.headers.map((header, idx) => (
         <th
          key={idx}
          className="px-3 py-2 text-left text-gray-600 border-b border-gray-300"
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
           className="px-3 py-2 border-b border-gray-300"
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

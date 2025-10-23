'use client';
import { useState } from 'react';
import CityCard from './CityCard';
import Pagination from './Pagination';
import { cities } from './cities';

const CityCarousel = () => {
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 3;
 const totalPages = Math.ceil(cities.length / itemsPerPage);

 const startIndex = (currentPage - 1) * itemsPerPage;
 const currentCities = cities.slice(startIndex, startIndex + itemsPerPage);

 const handlePageChange = (page) => setCurrentPage(page);

 const handlePrev = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
 };

 const handleNext = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
 };

 return (
  <div className="max-w-6xl mx-auto px-4 py-12">
   <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
    Pratik Bilgiler
   </h2>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {currentCities.map((city, index) => (
     <CityCard
      key={city.id}
      image={city.image}
      title={city.title}
      table={city.table}
      description={city.description}
      onPrev={index === 0 ? handlePrev : undefined}
      onNext={index === currentCities.length - 1 ? handleNext : undefined}
     />
    ))}
   </div>

   <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
   />
  </div>
 );
};

export default CityCarousel;

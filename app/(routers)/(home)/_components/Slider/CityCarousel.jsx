'use client';
import { useState, useEffect, useCallback } from 'react';
import CityCard from './CityCard';
import Pagination from './Pagination';

const CityCarousel = () => {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalPages, setTotalPages] = useState(1);
 const itemsPerPage = 2;

 const fetchPracticalInfos = useCallback(async () => {
  try {
   setLoading(true);
   const response = await fetch(
    `/api/practical-info?page=${currentPage}&limit=${itemsPerPage}`
   );

   if (!response.ok) {
    throw new Error('API isteği başarısız');
   }

   const data = await response.json();

   setPracticalInfos(data.data || []);
   setTotalPages(data.pagination?.totalPages || 1);
  } catch (error) {
   console.error('Veriler alınamadı:', error);
   setPracticalInfos([]);
   setTotalPages(1);
  } finally {
   setLoading(false);
  }
 }, [currentPage]);

 useEffect(() => {
  fetchPracticalInfos();
 }, [fetchPracticalInfos]);

 const handlePageChange = (page) => setCurrentPage(page);

 const handlePrev = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
 };

 const handleNext = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
 };

 if (loading) {
  return (
   <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
     Pratik Bilgiler
    </h2>
    <div className="flex justify-center items-center min-h-[400px]">
     <div className="text-lg text-gray-600 dark:text-gray-400">Yükleniyor...</div>
    </div>
   </div>
  );
 }

 return (
  <div className="max-w-6xl mx-auto px-4 py-12">
   <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
    Pratik Bilgiler
   </h2>

   {!practicalInfos || practicalInfos.length === 0 ? (
    <div className="text-center text-gray-600 dark:text-gray-400 py-12">
     Henüz pratik bilgi eklenmemiş.
    </div>
   ) : (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {practicalInfos.map((info, index) => (
       <CityCard
        key={info.id}
        image={info.image}
        title={info.title}
        description={info.description}
        afterDescription={info.afterDescription}
        table={info.tableData}
        onPrev={index === 0 ? handlePrev : undefined}
        onNext={index === practicalInfos.length - 1 ? handleNext : undefined}
       />
      ))}
     </div>

     <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
     />
    </>
   )}
  </div>
 );
};

export default CityCarousel;
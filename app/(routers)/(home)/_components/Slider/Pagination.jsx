const Pagination = ({ currentPage, totalPages, onPageChange }) => {
 const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

 return (
  <div className="flex items-center justify-center space-x-2 mt-8">
   <button
    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
    disabled={currentPage === 1}
    className={`px-3 py-1 rounded-md border text-sm transition ${currentPage === 1
     ? 'opacity-50 cursor-not-allowed'
     : 'hover:bg-gray-100'
     }`}
   >
    &lt;
   </button>

   {pages.map((page) => (
    <button
     key={page}
     onClick={() => onPageChange(page)}
     className={`px-3 py-1 rounded-md text-sm font-medium border transition ${page === currentPage
      ? 'bg-gray-800 text-white border-gray-800'
      : 'hover:bg-gray-100 border-gray-300'
      }`}
    >
     {page}
    </button>
   ))}

   <button
    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
    disabled={currentPage === totalPages}
    className={`px-3 py-1 rounded-md border text-sm transition ${currentPage === totalPages
     ? 'opacity-50 cursor-not-allowed'
     : 'hover:bg-gray-100'
     }`}
   >
    &gt;
   </button>
  </div>
 );
};

export default Pagination;

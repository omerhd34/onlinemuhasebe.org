const Pagination = ({ currentPage, totalPages, onPageChange }) => {
 if (!totalPages || totalPages <= 0 || !currentPage) {
  return null;
 }

 const safeTotalPages = Number(totalPages) || 1;
 const safeCurrentPage = Number(currentPage) || 1;

 const getVisiblePages = () => {
  const delta = 2;
  const pages = [];
  const rangeStart = Math.max(2, safeCurrentPage - delta);
  const rangeEnd = Math.min(safeTotalPages - 1, safeCurrentPage + delta);

  pages.push(1);

  if (rangeStart > 2) {
   pages.push('dots-left');
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
   pages.push(i);
  }

  if (rangeEnd < safeTotalPages - 1) {
   pages.push('dots-right');
  }

  if (safeTotalPages > 1) {
   pages.push(safeTotalPages);
  }

  return pages;
 };

 let visiblePages = [];
 try {
  visiblePages = getVisiblePages();
 } catch (error) {
  console.error('Pagination error:', error);
  return null;
 }

 if (!Array.isArray(visiblePages) || visiblePages.length === 0) {
  return null;
 }

 return (
  <div className="flex items-center justify-center space-x-2 mt-8">
   <button
    onClick={() => onPageChange(Math.max(1, safeCurrentPage - 1))}
    disabled={safeCurrentPage === 1}
    className={`px-3 py-1 rounded-md border text-sm transition ${safeCurrentPage === 1
     ? 'opacity-50 cursor-not-allowed bg-gray-100'
     : 'hover:bg-gray-100 dark:hover:bg-gray-800'
     }`}
    aria-label="Önceki sayfa"
   >
    &lt;
   </button>

   {visiblePages.map((item) => {
    if (typeof item === 'string' && item.startsWith('dots')) {
     return (
      <span
       key={item}
       className="px-3 py-1 text-gray-500 dark:text-gray-400 select-none"
      >
       ...
      </span>
     );
    }

    const pageNumber = Number(item);
    const isActive = pageNumber === safeCurrentPage;

    return (
     <button
      key={`page-${pageNumber}`}
      onClick={() => onPageChange(pageNumber)}
      className={`px-3 py-1 rounded-md text-sm font-medium border transition ${isActive
       ? 'bg-gray-800 text-white border-gray-800 dark:bg-gray-200 dark:text-gray-900'
       : 'bg-white hover:bg-gray-100 border-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-600'
       }`}
      aria-label={`Sayfa ${pageNumber}`}
      aria-current={isActive ? 'page' : undefined}
     >
      {pageNumber}
     </button>
    );
   })}

   <button
    onClick={() => onPageChange(Math.min(safeTotalPages, safeCurrentPage + 1))}
    disabled={safeCurrentPage === safeTotalPages}
    className={`px-3 py-1 rounded-md border text-sm transition ${safeCurrentPage === safeTotalPages
     ? 'opacity-50 cursor-not-allowed bg-gray-100'
     : 'hover:bg-gray-100 dark:hover:bg-gray-800'
     }`}
    aria-label="Sonraki sayfa"
   >
    &gt;
   </button>
  </div>
 );
};

export default Pagination;
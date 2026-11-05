import { useState } from "react";

export default function usePagination(totalItems: number, itemsPerPage: number = 10, initialPage: number = 1) {
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(
         totalPages === 0 ? 0 : Math.max(1, Math.min(initialPage, totalPages))
    );
   
    const startIndex = totalPages === 0 ? 0 : (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);


    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;
    
    const itemsOnCurrentPage = endIndex - startIndex;

    function setPage(pageNumber: number) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    }

    function nextPage() {
        setPage(currentPage + 1);
    }
    function prevPage() {
        setPage(currentPage - 1);
    }
    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage
    };

}
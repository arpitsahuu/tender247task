import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxDisplayedPages?: number;
}

export default function Pagination({ currentPage, totalPages, maxDisplayedPages = 5 }: PaginationProps) {

  // Function to calculate the page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfMaxDisplayed = Math.floor(maxDisplayedPages / 2);
    let startPage = Math.max(currentPage - halfMaxDisplayed, 1);
    let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    if (endPage - startPage + 1 < maxDisplayedPages) {
      startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-8" aria-label="Pagination">
      <ul className="inline-flex items-center -space-x-px">

        {/* Previous Page Link */}
        <li>
          <PaginationLink
            href={`/?page=${Math.max(1, currentPage - 1)}`}
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            aria-label="Previous page"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="w-5 h-5" />
          </PaginationLink>
        </li>

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <li key={page}>
            <PaginationLink
              href={`/?page=${page}`}
              className={`px-3 py-2 leading-tight ${
                currentPage === page
                  ? 'text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {page}
            </PaginationLink>
          </li>
        ))}

        {/* Next Page Link */}
        <li>
          <PaginationLink
            href={`/?page=${Math.min(totalPages, currentPage + 1)}`}
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            aria-label="Next page"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="w-5 h-5" />
          </PaginationLink>
        </li>
      </ul>
    </nav>
  )
}


// PaginationLink component for better reusability
function PaginationLink({ href, className, children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}



import usePagination from "../../hooks/usePagination";

export default function PaginationDemo() {

    const students = Array.from(
        { length: 100 },
        (_, index) => `Student ${index + 1}`
    );

    const itemsPerPage = 10;

    const {
        currentPage,
        totalPages,
        startIndex,
        endIndex
    } = usePagination(students.length, itemsPerPage);

    const currentStudents = students.slice(startIndex, endIndex);

    return (
        <div className="pagination-demo">

            <h2>Student Pagination Demo</h2>

            <p>Showing {itemsPerPage} students per page</p>

            <div>
                {currentStudents.map((student) => (
                    <p key={student}>{student}</p>
                ))}
            </div>

            <p>Page {currentPage} of {totalPages}</p>

        </div>
    );
}
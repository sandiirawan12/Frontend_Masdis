import { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function MyPagination(props) {
    const { pagination, handlePageChange } = props
    const [numbers, setNumbers] = useState([])
    useEffect(() => {
        let arr = [];
        for (let index = 1; index <= pagination.total; index++) {
            arr.push(index)
        }
        setNumbers(arr)
    }, [pagination])

    const handleChange = (number) => {
        handlePageChange(number)
    }

    const handleNext = () => {
        handlePageChange(pagination.page + 1)
    }
    const handlePrevious = () => {
        if (pagination.page > 1) {
            handlePageChange(pagination.page - 1)
        }
    }

    return (
        <Pagination>
            <PaginationItem onClick={handlePrevious}>
                <PaginationLink previous />
            </PaginationItem>
            {numbers.map(item => (
                <PaginationItem key={item} onClick={() => handleChange(item)}>
                    <PaginationLink>{item}</PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem onClick={handleNext}>
                <PaginationLink next />
            </PaginationItem>
        </Pagination>
        // <nav aria-label="Page navigation example">
        //     <ul className="pMyagination justify-content-center">
        //         <li className="page-item">
        //             <a className="page-link pagelink" href="#" data-page={1} tabIndex={-1}>Previous</a>
        //         </li>
        //         <li className="page-item active"><a data-aktif="active" data-page={1} className="page-link pagelink" href="#">1</a></li>
        //         <a className="page-link pagelink" href="#" data-page={1}>Next</a>
        //     </ul>
        // </nav>
    );
}

export default MyPagination;
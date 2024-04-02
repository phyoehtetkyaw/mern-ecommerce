const Pagination = ({ total, perPage, paginate, current }) => {

    const pageNo = []

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNo.push(i)
    }
    console.log(current, "pagination")
    return (
        <ul className='flex space-x-1 mt-5'>
            <li className='pagination-item' onClick={() => paginate(1)}>Prev</li>
            {
                pageNo.map((item, i) => (
                    
                    (i + 1 > (current - 3) && i + 1 < (current + 3)) && <li className={ `pagination-item ${i + 1 === current ? "bg-violet-500 text-white" : ""}` } key={i + 1} onClick={() => paginate(item)}>{item}</li>
                ))
            }
            <li className='pagination-item' onClick={() => paginate(pageNo[pageNo.length - 1])}>Next</li>
        </ul>
    )
}

export default Pagination
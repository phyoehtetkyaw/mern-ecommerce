import axios from 'axios';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Table from '../../components/Table'
import Pagination from '../../components/Pagination';

const Category = () => {

    const [category, setCategory] = useState([])
    const [loader, setLoader] = useState(false)
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(10)

    useEffect(() => {
        const fetchCategory = async () => {
            setLoader(true)
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            setCategory(res.data)
            setLoader(false)
        }

        fetchCategory()
    }, [])

    const cols = ["No", "Name"]
    const lastIndex = current * perPage
    const startIndex = lastIndex - perPage
    const data = category.slice(startIndex, lastIndex)

    const paginate = pageNo => setCurrent(pageNo)
    
    console.log(current, "category")
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-4xl">Category</h1>
                <Link to={ `add` } className="bg-blue-500 py-0.5 px-5 rounded-sm text-white text-sm">Add</Link>
            </div>
            { !loader && <Table title="category" cols={cols} data={data} />}
            { !loader && <Pagination total={category.length} perPage={perPage} paginate={paginate} current={current} /> }
        </div>
    )
}

export default Category
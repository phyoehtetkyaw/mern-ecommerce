import { Link } from "react-router-dom"

const Table = ({ title, cols, data }) => {
    return (
        <table className="bg-gray-100 w-full rounded-lg table table-auto mt-10">
            <thead className="text-left">
                <tr>
                    {
                        cols.map((item, i) => (
                            <th key={i} className="py-2 first:pl-5">{item}</th>
                        ))
                    }
                    <th className="py-2">Option</th>
                </tr>
            </thead>
            <tbody>
                { data.map((item, i) => (
                    <tr className="hover:bg-gray-200" key={item.id}>
                        <td className="py-2 pl-5">{i+1}</td>
                        <td className="py-2">{item.title}</td>
                        <td className="space-x-1">
                            <Link to={ `/${title}/edit` } className="bg-orange-500 px-5 py-0.5 rounded-sm text-white text-sm">Edit</Link>
                            <button className="bg-red-500 px-5 py-0.5 rounded-sm text-white text-sm">Delete</button>
                        </td>
                    </tr>
                )) }
                
            </tbody>
        </table>
    )
}

export default Table
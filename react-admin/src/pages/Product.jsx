import { Link } from "react-router-dom"

function Product() {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-4xl">Product</h1>
                    <Link className="bg-blue-500 py-0.5 px-5 rounded-sm text-white text-sm">Add</Link>
                </div>
                <table className="bg-gray-100 w-full rounded-lg table table-auto mt-10">
                    <thead className="text-left">
                        <tr>
                            <th className="py-2 pl-5">No</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-200">
                            <td className="py-2 pl-5">1</td>
                            <td className="py-2">Test</td>
                            <td className="space-x-1">
                                <Link to={ `/category/edit` } className="bg-orange-500 px-5 py-0.5 rounded-sm text-white text-sm">Edit</Link>
                                <button className="bg-red-500 px-5 py-0.5 rounded-sm text-white text-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
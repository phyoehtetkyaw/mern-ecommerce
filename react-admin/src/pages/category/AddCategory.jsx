import { Link } from "react-router-dom"

function Category() {
    return (
        <div>
            <h1 className="font-bold text-4xl">Add Category</h1>
            <form action="" method="post" className="w-96 m-auto mt-10">
                <div className="mb-3">
                    <label className="font-bold block mb-1" htmlFor="">Name <span className="text-red">*</span></label>
                    <input type="text" className="p-1 w-full border-gray-500 border-2 rounded-sm" />
                </div>
                <div className="text-white space-x-1">
                    <Link to={ `/category` } className="bg-red-500 px-5 py-1 text-sm">Cancel</Link>
                    <button type="submit" className="bg-blue-500 px-5 py-1 text-sm">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Category
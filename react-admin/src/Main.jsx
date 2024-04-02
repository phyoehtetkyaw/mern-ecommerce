import { Outlet } from "react-router-dom"
import Sidebar from "./pages/includes/Sidebar"

function Main() {
    return (
        <div className="flex justify-between">
            <aside className="w-2/12 bg-violet-800 h-screen text-white p-5 rounded-r-lg">    
                <Sidebar />
            </aside>
            <main className="w-10/12 px-8 py-5">
                <Outlet />
            </main>
        </div>
    )
}

export default Main
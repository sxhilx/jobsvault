import React from "react"
import { Link } from "react-router-dom"
import { House, DiamondPlus } from 'lucide-react'

const Sidebar = () => {
    return(
        <div className="w-full md:max-w-3xs bg-white border-r border-[#E5E7EB] h-screen fixed top-0 left-0 overflow-hidden font-primary">
            <div className="p-4">
                <h1 className="text-2xl text-black font-semibold">Jobs Vault</h1>
                <ul className="mt-7 space-y-5 mx-2">
                    <li className="flex items-center gap-2 text-sm">
                        <House size={18} />
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <DiamondPlus size={18} />
                        <Link to="/add-job">
                            Add Job
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
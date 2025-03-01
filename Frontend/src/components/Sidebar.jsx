import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { House, DiamondPlus, LogOut, Columns2 } from 'lucide-react'


const Sidebar = ({isOpen, toggleSideBar}) => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate('/login')
    }
    return(
        <div className={`w-full md:max-w-3xs bg-white border-r border-[#E5E7EB] h-screen fixed top-0 left-0 z-50 overflow-hidden font-primary transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl text-black font-semibold">JobsVault</h1>
                <Columns2 onClick={toggleSideBar} className="text-gray-500 cursor-pointer"/>
                </div>
                <ul className="mt-7 space-y-5 mx-2 ">
                    <li className="flex items-center gap-2 text-sm">
                        <House size={18} />
                        <Link
                        onClick={(e) => {
                            if (window.innerWidth < 768) {
                              toggleSideBar();
                        }}}
                        to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <DiamondPlus size={18} />
                        <Link 
                       onClick={(e) => {
                        if (window.innerWidth < 768) {
                          toggleSideBar();
                        }
                      }}
                        to="/add-job">
                            Add Job
                        </Link>
                    </li>
                    <li 
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm text-red-500 cursor-pointer">
                        <LogOut size={18}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
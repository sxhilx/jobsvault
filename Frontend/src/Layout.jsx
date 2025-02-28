import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar  from "./components/Sidebar";
import { Columns2 } from "lucide-react";



const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(window.innerWidth > 768)

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev)
  }
  return (
    <div className="flex h-screen">
      
      <div>
        <Sidebar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar}/>
      </div>

      {!isSideBarOpen && (
        <div className="fixed top-5 left-5 z-50 transition-transform duration-300">
          <Columns2 size={24} onClick={toggleSideBar} className="text-gray-500 cursor-pointer" />
        </div>
      )}
      
      <div className={`flex-1 overflow-auto transition-transform duration-300 ${isSideBarOpen ? "pl-64" : "pl-0"}`}>

        <Outlet />        
      </div>
    </div>
  );
};

export default Layout;

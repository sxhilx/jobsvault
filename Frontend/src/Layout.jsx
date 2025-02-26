import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";


const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 pl-64 overflow-auto">
          <Outlet />        
      </div>
    </div>
  );
};

export default Layout;

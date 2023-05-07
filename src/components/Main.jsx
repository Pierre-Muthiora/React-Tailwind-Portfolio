import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";



const Main = ({ showSideBar, sideBar, router, noShowSideBar }) => {
  
  return (
    <div
      
      id="main"    
      className={sideBar ? "dark:bg-gray-950 pl-64 duration-300 z-30" : "dark:bg-gray-950 duration-300 lg:pl-64 z-30"}
    >
      {/* =============hamburger menu start========== */}
      <div
        onClick={showSideBar}
        className="sticky lg:hidden z-50 top-2 h-8 w-8 bg-slate-200 hover:bg-slate-400 dark:bg-gray-900 dark:hover:bg-gray-700 rounded-lg cursor-pointer flex items-center duration-300"
      >
        {!sideBar ? (
          <GiHamburgerMenu size={20} className="text-red-600 mx-auto" />
        ) : (
          <FaTimes size={20} className="text-red-600 mx-auto" />
        )}
      </div>
      {/* =============hamburger menu end=========== */}
      
      
      <Router>
          <AnimatedRoutes/>
        </Router>
      
    </div>
  );
};

export default Main;

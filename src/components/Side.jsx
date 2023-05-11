import React from "react";
import { FaHome, FaListUl, FaBriefcase, FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";


const Side = ({sideBar, showSideBar, noShowSidebar}) => {
  

  return (
    <div id="side container">
      <div onClick={noShowSidebar}
        id="aside"
        className={sideBar ? "fixed left-0 top-0 z-10 w-64 p-14 h-full lg:hidden justify-center items-center dark:bg-gray-900 bg-slate-100 border-r-[1px] dark:border-gray-700 border-gray-300" : "hidden"}>
        <div className="absolute top-12 text-3xl">
          <a href="/" className="relative font-bold p-4 text-3xl tracking-[5px] dark:text-slate-200">
            <div className="absolute left-0 bottom-0 h-5 w-5 border-b-4 border-l-4 border-red-600"></div>
            <div className="absolute top-0 right-0 h-5 w-5 border-t-4 border-r-4 border-red-600"></div>
            <span className="font-clicker text-[40px]">P</span>ierre
          </a>
        </div>
        <div className="mt-24">
          <ul>
            <li className="block mb-5">
              
                <a
                  className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
                  href="/"
                >
                  <FaHome size={20} className="mr-4" />
                  Home
                </a>
             
            </li>
            <li className="block mb-5">
              <a 
                className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
                href="/About"
              >
                <BsFillPersonFill size={20} className="mr-4" />
                About
              </a>
            </li>
            <li className="block mb-5">
              <a 
                className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
                href="/Services"
              >
                <FaListUl size={20} className="mr-4" />
                Services
              </a>
            </li>
            <li className="block mb-5">
              <a 
                className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
                href="/Portfolio"
              >
                <FaBriefcase size={20} className="mr-4" />
                Projects
              </a>
            </li>
            <li className="block mb-5">
              <a 
                className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
                href="/Contact"
              >
                <FaComments size={20} className="mr-4" />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*================== other aside ==============*/}
      
      <div
      id="asideTwo"
      className="fixed hidden lg:flex left-0 top-0 z-10 w-64 p-14 h-full justify-center items-center dark:bg-gray-900 bg-slate-100 border-r-[1px] dark:border-gray-700 border-gray-300">
      <div className="absolute top-12 text-3xl">
        <a href="/" className="relative font-bold p-4 text-3xl tracking-[5px] dark:text-slate-200">
          <div className="absolute left-0 bottom-0 h-5 w-5 border-b-4 border-l-4 border-red-600"></div>
          <div className="absolute top-0 right-0 h-5 w-5 border-t-4 border-r-4 border-red-600"></div>
          <span className="font-clicker text-[40px]">P</span>ierre
        </a>
      </div>
      <div className="mt-12">
        <ul>
          <li className="block mb-5">
            <a
              className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
              href="/"
            >
              <FaHome size={20} className="mr-4" />
              Home
            </a>
          </li>
          <li className="block mb-5">
            <a
              className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
              href="/About"
            >
              <BsFillPersonFill size={20} className="mr-4" />
              About
            </a>
          </li>
          <li className="block mb-5">
            <a
              className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
              href="/Services"
            >
              <FaListUl size={20} className="mr-4" />
              Services
            </a>
          </li>
          <li className="block mb-5">
            <a          
              className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
              href="/Portfolio"
            >
              <FaBriefcase size={20} className="mr-4" />
              Projects
            </a>
          </li>
          <li className="block mb-5">
            <a
              className="flex text-base font-semibold py-4 px-1 border-b-[1px] border-gray-300 dark:border-gray-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-600"
              href="/Contact"
            >
              <FaComments size={20} className="mr-4" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Side;

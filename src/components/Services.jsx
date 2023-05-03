import React from "react";
import { MdSort } from "react-icons/md";
import { RiFileCodeLine, RiPhoneFindFill } from "react-icons/ri";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { SiTailwindcss } from "react-icons/si";
import {motion as m} from "framer-motion";



const Services = () => {
  return (
    <m.div
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.8, ease: "easeOut"}}
    exit={{opacity: 1}}  
     id="services" className="">
      <div id="container" className="px-3 pt-[60px]">
        <div id="row">
          <div
            id="section title"
            className="relative px-4 max-w-full mb-[60px]"
          >
            <h2 className="text-4xl my-4 font-bold font-serif dark:text-slate-200">Services</h2>
            <div className="absolute -bottom-9 left-2.5">
              <MdSort size={50} className="text-red-600" />
            </div>
          </div>
        </div>
        <div id="row" className="px-4">
          <div
            id="service-item"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20 max-w-1/3"
          >
            <div
              id="service item inner"
              className="bg-slate-100 dark:bg-slate-800 dark:border-gray-700 border rounded-lg px-7 py-4 text-center duration-300 hover:shadow-md hover:shadow-black dark:hover:shadow-red-600"
            >
              <div
                id="icon"
                className="block h-[60px] w-[60px] rounded-[50%] mb-7 mx-auto text-center"
              >
                <RiFileCodeLine size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">Web development</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt quis provident distinctio.
              </p>
            </div>
            <div
              id="service item inner"
              className="bg-slate-100 dark:bg-slate-800 dark:border-gray-700 border rounded-lg px-7 py-4 text-center duration-300 hover:shadow-md hover:shadow-black dark:hover:shadow-red-600"
            >
              <div
                id="icon"
                className="block h-[60px] w-[60px] rounded-[50%] mb-7 mx-auto text-center"
              >
                <SiTailwindcss size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">Web design</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt quis provident distinctio.
              </p>
            </div>
            <div
              id="service item inner"
              className="bg-slate-100 dark:bg-slate-800 dark:border-gray-700 border rounded-lg px-7 py-4 text-center duration-300 hover:shadow-md hover:shadow-black dark:hover:shadow-red-600"
            >
              <div
                id="icon"
                className="block h-[60px] w-[60px] rounded-[50%] mb-7 mx-auto text-center"
              >
                <RiPhoneFindFill size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">Web development</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt quis provident distinctio.
              </p>
            </div>
            <div
              id="service item inner"
              className="bg-slate-100 dark:bg-slate-800 dark:border-gray-700 border rounded-lg px-7 py-4 text-center duration-300 hover:shadow-md hover:shadow-black dark:hover:shadow-red-600"
            >
              <div
                id="icon"
                className="block h-[60px] w-[60px] rounded-[50%] mb-7 mx-auto text-center"
              >
                <HiPaintBrush size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">Web design</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt quis provident distinctio.
              </p>
            </div>
            <div
              id="service item inner"
              className="bg-slate-100 dark:bg-slate-800 dark:border-gray-700 border rounded-lg px-7 py-4 text-center duration-300 hover:shadow-md hover:shadow-black dark:hover:shadow-red-600"
            >
              <div
                id="icon"
                className="block h-[60px] w-[60px] rounded-[50%] mb-7 mx-auto text-center"
              >
                <FaReact size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">Web development</h4>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt quis provident distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Services;

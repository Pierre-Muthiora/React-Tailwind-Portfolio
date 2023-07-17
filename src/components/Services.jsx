import React from "react";
import { MdSort } from "react-icons/md";
import { RiFileCodeLine } from "react-icons/ri";
import { TiSpanner } from "react-icons/ti";
import { SiTailwindcss, SiNetlify } from "react-icons/si";
import { motion as m } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="services"
      className=""
    >
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="I offer development, design, deployment, and maintenance of websites."
        />
        <link rel="canonical" href="/Services" />
        <meta
          name="keywords"
          content="HTML, CSS, JS, Tailwind, React, Next, WordPress, front end, web development, web design, SEO, freelance"
        />
        <meta name="author" content="Peter Ng'ang'a Muthiora" />
      </Helmet>

      <div id="container" className="px-3 pt-[60px]">
        <div id="row">
          <div
            id="section title"
            className="relative px-4 max-w-full mb-[60px]"
          >
            <h2 className="text-4xl my-4 font-bold font-serif dark:text-slate-200">
              Services
            </h2>
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
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">
                Web development
              </h4>
              <p className="text-slate-600">
                Creating a website for the Internet or an intranet, ranging from
                developing a simple single static page of plain text to complex
                web applications and electronic businesses.
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
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">
                Web design
              </h4>
              <p className="text-slate-600">
                Planning, conceptualizing, and implementing the plan for
                designing a website in a way that is functional and offers a
                good user experience, making the website simple and efficient,
                allowing users to quickly find information they need and look
                visually pleasing.
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
                <SiNetlify size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">
                Web deployment
              </h4>
              <p className="text-slate-600">
                Using client-server tools for syncing content and configuration
                to IIS, ie, publishing websites to the Internet.
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
                <TiSpanner size={60} className="text-red-600" />
              </div>
              <h4 className="text-lg mb-4 font-bold dark:text-slate-200">
                Web maintenance
              </h4>
              <p className="text-slate-600">
                Keeping a website up-to-date and running smoothly as well as
                performing optimally. Ensuring links on sites are working,
                regularly updating content, and fixing any broken links.
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Services;

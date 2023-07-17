import React from "react";
import { motion as m } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="home"
      className=" flex min-h-screen opacity-100 px-3"
    >
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Frontend Web developer/designer in React JS, Next JS, WordPress, and Tailwind CSS"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div id="container" className="m-auto w-full">
        <div id="row" className="relative flex flex-col-reverse lg:flex-row">
          {/*========= home-info container ==========*/}
          <div id="home info" className="px-4 max-w-full lg:max-w-[60%] mb-16">
            <h3
              id="hello"
              className="text-3xl my-4 font-bold font-serif dark:text-slate-200"
            >
              Hi, my name is{" "}
              <span
                id="name"
                className="font-clicker text-3xl text-red-600 font-bold"
              >
                Peter Ng'ang'a
              </span>
            </h3>
            <h3 className="text-3xl my-4 font-bold text-gray-700 dark:text-slate-200">
              I'm a{" "}
              <span id="typing" className="text-red-600">
                Web developer/designer
              </span>
            </h3>
            <p className="mb-[70px] text-xl text-slate-600 text-justify">
              A web developer with expertise in frontend programming specialised
              in React JS, Next JS, WordPress, and Tailwind CSS.
            </p>

            <a href="/Contact">
              <button
                id="btn hire-me"
                className="text-base font-medium px-9 py-3 bg-red-600 text-white rounded-full duration-300 hover:scale-105"
              >
                Hire me
              </button>
            </a>
          </div>
          {/*============ image container ==========*/}
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            id="home-img"
            className="relative flex px-4 mx-auto lg:max-w-[40%] mb-16"
          >
            <div className="hidden lg:block absolute left-0 top-0 h-20 w-20 border-t-8 border-l-8 border-red-600"></div>
            <div className="hidden lg:block absolute right-0 bottom-0 h-20 w-20 border-b-8 border-r-8 border-red-600"></div>
            <img
              className="h-[400px] m-auto pb-6 rounded-full"
              src="pics\myself.png"
              alt="me"
            />
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default Home;

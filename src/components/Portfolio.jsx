import React from "react";
import { MdSort } from "react-icons/md";
import { motion as m } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="portfolio"
      className=""
    >
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="Projects done over time utilizing languages I've specialized in."
        />
        <link rel="canonical" href="/Portfolio" />
        <meta
          name="keywords"
          content="HTML, CSS, JS, Tailwind, React, Next, WordPress, front end, web development, web design, SEO, freelance"
        />
        <meta name="author" content="Peter Ng'ang'a Muthiora" />
      </Helmet>

      <div id="container" className="-mb-7 px-3 pt-[60px]">
        <div id="row">
          <div
            id="section title"
            className="relative px-4 max-w-full mb-[60px]"
          >
            <h1 className="text-4xl my-4 font-bold font-serif dark:text-slate-200">
              Projects
            </h1>
            <div className="absolute -bottom-9 left-2.5">
              <MdSort size={50} className="text-red-600" />
            </div>
          </div>
        </div>
        <div id="row" className="px-4">
          <div id="portfolio heading">
            <h2 className="text-3xl my-4 font-bold text-gray-700 mb-10 dark:text-slate-200">
              My work :
            </h2>
          </div>
        </div>
        <div id="row" className="px-4 py-10">
          {/*======= portfolio item  =======*/}

          <div
            id="portfolio-item"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-1/3"
          >
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierrerockpaperscissors.netlify.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\rps.png"
                    alt="rps"
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierretodolist.netlify.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\todo.png"
                    alt="todo"
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierrecalculator.netlify.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\calc.png"
                    alt="calculator"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a target="_blank" rel="noreferrer" href="pics\modal.png">
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\modal.png"
                    alt="modal"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierrenetflixclone.netlify.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\Netflix.png"
                    alt="netflix"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierreweatherapp.netlify.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\weather.png"
                    alt="weather"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierrenextportfoliotemplate.vercel.app/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\nextportfolio.png"
                    alt="portfolio template"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              id="portfolio item inner"
              className="border-4 dark:border-gray-700 rounded-lg cursor-pointer"
            >
              <div id="portfolio-img" className="">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pierrengash.wordpress.com/2023/07/13/eat-your-way-to-optimal-health-unveiling-the-top-5-superfoods-you-must-try/"
                >
                  <img
                    className="block w-full hover:opacity-70"
                    src="pics\blog.png"
                    alt="blog"
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Portfolio;

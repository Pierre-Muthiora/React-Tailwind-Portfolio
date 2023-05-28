import React from "react";
import { MdSort, MdCalendarMonth } from "react-icons/md";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="about"
      className=""
    >
      <div id="container" className="px-3 pt-[60px] pb-[70px]">
        <div id="row">
          <div
            id="section-title"
            className="relative px-4 max-w-full mb-[60px]"
          >
            <h2 className="text-4xl my-4 font-bold font-serif dark:text-slate-200">
              About me
            </h2>
            <div className="absolute -bottom-9 left-2.5">
              <MdSort size={50} className="text-red-600" />
            </div>
          </div>
        </div>
        <div id="row">
          <div id="about-content" className="px-4 max-w-full">
            <div id="row">
              <div id="about-text" className="max-w-full">
                <h3 className="text-2xl mb-4 font-bold text-gray-700 dark:text-slate-200">
                  I'm Peter Ng'ang'a, a{" "}
                  <span className="text-red-600">Web Developer/Designer</span>
                </h3>
                <p className="text-slate-600 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  molestiae! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Suscipit facilis, magni
                  quod sapiente aspernatur deleniti.
                </p>
              </div>
            </div>
            <div id="row" className="flex flex-col lg:flex-row gap-y-16 mt-10">
              {/*============= personal info =============*/}
              <div id="personal-info" className="flex-[60%]">
                <div id="row">
                  <div id="info-item">
                    <p className="font-semibold py-2.5 border-b dark:border-gray-700 dark:text-slate-200">
                      Email :{" "}
                      <span className="inline-block font-normal text-slate-600 ml-1">
                        pierremuthiora@gmail.com
                      </span>
                    </p>
                  </div>
                  <div id="info-item">
                    <p className="font-semibold py-2.5 border-b dark:border-gray-700 dark:text-slate-200">
                      Phone :{" "}
                      <span className="inline-block font-normal text-slate-600 ml-1">
                        +254729393558
                      </span>
                    </p>
                  </div>
                  <div id="info-item">
                    <p className="font-semibold py-2.5 border-b dark:border-gray-700 dark:text-slate-200">
                      Freelance :{" "}
                      <span className="inline-block font-normal text-slate-600 ml-1">
                        Available
                      </span>
                    </p>
                  </div>
                </div>
                <div id="row">
                  <div
                    id="buttons"
                    className="flex flex-col lg:flex-row gap-1 px-4 align-bottom"
                  >
                    <a href="pics\peter resume.docx" download id="btn">
                      <button className="text-base font-medium px-5 py-3 bg-red-600 text-white rounded-full duration-300 hover:scale-105 mr-4 mt-2.5">
                        Download CV
                      </button>
                    </a>

                    <a href="/Contact" id="btn hire-me">
                      <button className="text-base font-medium px-5 py-3 bg-red-600 text-white rounded-full duration-300 hover:scale-105 mr-4 mt-2.5">
                        Hire me
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/*============= skills ==============*/}
              <div id="skills" className="flex-[40%] px-4">
                <div id="row">
                  <div id="skill-item" className="max-w-full mb-6">
                    <h5 className="leading-10 font-semibold dark:text-slate-200">
                      CSS
                    </h5>
                    <div
                      id="progress"
                      className="relative bg-blue-100 w-full h-2 rounded"
                    >
                      <div
                        id="progress-in"
                        className="w-[76%] absolute left-0 top-0 h-full rounded bg-red-600"
                      ></div>
                      <div
                        id="skill-percent"
                        className="absolute right-0 -top-10 leading-10 dark:text-slate-200"
                      >
                        76%
                      </div>
                    </div>
                  </div>
                  <div id="skill-item" className="max-w-full mb-6">
                    <h5 className="leading-10 font-semibold dark:text-slate-200">
                      JS
                    </h5>
                    <div
                      id="progress"
                      className="relative bg-blue-100 w-full h-2 rounded"
                    >
                      <div
                        id="progress-in"
                        className="w-[66%] absolute left-0 top-0 h-full rounded bg-red-600"
                      ></div>
                      <div
                        id="skill-percent"
                        className="absolute right-0 -top-10 leading-10 dark:text-slate-200"
                      >
                        66%
                      </div>
                    </div>
                  </div>
                  <div id="skill-item" className="max-w-full mb-6">
                    <h5 className="leading-10 font-semibold dark:text-slate-200">
                      HTML
                    </h5>
                    <div
                      id="progress"
                      className="relative bg-blue-100 w-full h-2 rounded"
                    >
                      <div
                        id="progress-in"
                        className="w-[96%] absolute left-0 top-0 h-full rounded bg-red-600"
                      ></div>
                      <div
                        id="skill-percent"
                        className="absolute right-0 -top-10 leading-10 dark:text-slate-200"
                      >
                        96%
                      </div>
                    </div>
                  </div>
                  <div id="skill-item" className="max-w-full mb-6">
                    <h5 className="leading-10 font-semibold dark:text-slate-200">
                      Tailwind
                    </h5>
                    <div
                      id="progress"
                      className="relative bg-blue-100 w-full h-2 rounded"
                    >
                      <div
                        id="progress-in"
                        className="w-[96%] absolute left-0 top-0 h-full rounded bg-red-600"
                      ></div>
                      <div
                        id="skill-percent"
                        className="absolute right-0 -top-10 leading-10 dark:text-slate-200"
                      >
                        96%{" "}
                      </div>
                    </div>
                  </div>
                  <div id="skill-item" className="max-w-full mb-6">
                    <h5 className="leading-10 font-semibold dark:text-slate-200">
                      React
                    </h5>
                    <div
                      id="progress"
                      className="relative bg-blue-100 w-full h-2 rounded"
                    >
                      <div
                        id="progress-in"
                        className="w-[70%] absolute left-0 top-0 h-full rounded bg-red-600"
                      ></div>
                      <div
                        id="skill-percent"
                        className="absolute right-0 -top-10 leading-10 dark:text-slate-200"
                      >
                        70%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="row" className="flex flex-col gap-y-16 md:flex-row mt-12">
              {/*================ education =================*/}

              <div id="education" className="flex-[50%] pr-2">
                <h3
                  id="title"
                  className="text-2xl mb-7 font-bold dark:text-slate-200"
                >
                  Education
                </h3>
                <div id="row">
                  <div id="timeline-box" className="w-full">
                    <div
                      id="timeline"
                      className="relative w-full py-7 px-3.5 rounded-lg border dark:border-gray-700 dark:shadow-red-600 shadow-lg"
                    >
                      <div
                        id="timeline-item"
                        className="relative pl-8 pb-12
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2002
                          - 2010
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Kenya Certificate of Primary Education
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Scored an overall 390 out of 500 marks
                        </p>
                      </div>
                      <div
                        id="timeline-item"
                        className="relative pl-8 pb-12
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2011
                          - 2015
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          {" "}
                          Kenya Certificate of Secondary Education
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Scored an overall garde of A-
                        </p>
                      </div>
                      <div
                        id="timeline-item"
                        className="relative pl-8 pb-12
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2016
                          - Present
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Bachelor of Science
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Currently pursuing a degree in Industrial Chemistry
                        </p>
                      </div>
                      <div
                        id="timeline-item"
                        className="relative pl-8
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2021
                          - Present
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Certificate
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Also pursuing a web development certificate online
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*============== experience ==============*/}
              <div id="experience" className="flex-[50%] pl-2">
                <h3
                  id="title"
                  className="text-2xl mb-7 font-bold dark:text-slate-200"
                >
                  Experience
                </h3>
                <div id="row">
                  <div id="timeline-box" className="w-full">
                    <div
                      id="timeline"
                      className="relative w-full py-7 px-3.5 rounded-lg border dark:border-gray-700 dark:shadow-red-600 shadow-lg"
                    >
                      <div
                        id="timeline-item"
                        className="relative pl-8 pb-12
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2017
                          - 2022
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Freelance transcriptionist at Verbit Software
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Performed human/machine-initiated transcriptions,
                          resolved discrepancies in files without altrering
                          original meaning, and reviewed transcribed files to
                          correct issues on clarity, terminology, and grammar
                        </p>
                      </div>
                      <div
                        id="timeline-item"
                        className="relative pl-8 pb-12
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2019
                          - 2022
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Freelancer at Remotasks
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Performed video/audio transcriptions and translations,
                          image annotation, and data categorization
                        </p>
                      </div>

                      <div
                        id="timeline-item"
                        className="relative pl-8
                      "
                      >
                        <div
                          id="timeline-item-before"
                          className="absolute h-full w-px left-[7px] top-0 bg-red-600"
                        ></div>
                        <div
                          id="circle-dot"
                          className="absolute left-0 top-0 h-3.5 w-3.5 rounded-[50%] bg-red-600"
                        ></div>
                        <h3
                          id="timeline-date"
                          className="flex items-center text-sm mb-3 text-slate-600 dark:text-slate-200"
                        >
                          <MdCalendarMonth size={17} className="mr-1.5" /> 2015
                          - 2018
                        </h3>
                        <h4
                          id="timeline-title"
                          className="font-bold text-lg mb-3.5 dark:text-slate-200"
                        >
                          Writer at Course Hero
                        </h4>
                        <p
                          id="timeline-text"
                          className="text-justify text-slate-600"
                        >
                          Wrote educational content to be used as study
                          materials
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;

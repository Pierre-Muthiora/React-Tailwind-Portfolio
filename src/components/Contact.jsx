import React from "react";
import { MdSort, MdPhoneInTalk, MdMail } from "react-icons/md";
import {motion as m} from "framer-motion";



const Contact = () => {
  return (
    <m.div 
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.8, ease: "easeOut"}}
    exit={{opacity: 1}} 
     id="contact" className="">
      <div id="container" className="px-3 pt-[60px]">
        <div id="section title" className="relative px-4 max-w-full mb-[60px]">
          <h2 className="text-4xl my-4 font-bold font-serif dark:text-slate-200">Contact</h2>
          <div className="absolute -bottom-9 left-2.5">
            <MdSort size={50} className="text-red-600" />
          </div>
        </div>

        <div id="row" className="px-4">
          <div className="mb-14">
            <h3
              id="contact-title"
              className="text-red-600 text-center text-3xl md:text-4xl mb-5 font-bold"
            >
              Feel free to contact me
            </h3>
            <h4
              id="contact sub-title"
              className="text-center text-slate-700 font-semibold text-xl"
            >
              I'm @ your service
            </h4>
          </div>

          <div id="contact into item container" className="md:flex mb-32">
            <div
              id="contact info item"
              className="md:flex-[33.33%] text-center mb-14"
            >
              <div id="icon" className="inline-block">
                <MdPhoneInTalk size={40} className="text-2xl text-red-600" />
              </div>
              <h4 className="text-lg font-bold mt-4 mb-1.5 dark:text-slate-200">Pnone number</h4>
              <p className="text-slate-600">+254729393558</p>
            </div>
            <div
              id="contact info item"
              className="md:flex-[33.33%] text-center mb-14"
            >
              <div id="icon" className="inline-block">
                <MdMail size={40} className="text-2xl text-red-600" />
              </div>
              <h4 className="text-lg font-bold mt-4 mb-1.5 dark:text-slate-200">Email</h4>
              <p className="text-slate-600">pierremuthiora@gmail.com</p>
            </div>
            <div
              id="contact info item"
              className="md:flex-[33.33%] text-center mb-14"
            >
              <div id="icon" className="inline-block">
                <MdPhoneInTalk size={40} className="text-2xl text-red-600" />
              </div>
              <h4 className="text-lg font-bold mt-4 mb-1.5 dark:text-slate-200">Pnone number</h4>
              <p className="text-slate-600">+254729393558</p>
            </div>
          </div>
        </div>

        <div id="row" className="px-4">
          <h3
            id="contact-title"
            className="text-red-600 text-center text-3xl md:text-4xl mb-5 font-bold"
          >
            Send me an email
          </h3>
          <h4
            id="contact sub-title"
            className="text-center text-xl text-slate-700 font-semibold"
          >
            Anytime
          </h4>
          {/*========= contact form ==========*/}
          <div id="row">
            <form action="https://formsubmit.co/d62becea4b9489004ce79b1f9977c573" method="POST" target="_blank" id="contact form" className="max-w-full mt-10">
              {/*============== name and email ===============*/}
              <div id="row" className="flex flex-col md:flex-row">
                <div
                  id="form-item col-6"
                  className="md:flex-[50%] max-w-[100%] mb-7 mr-1"
                >
                  <div id="form group">
                    <input
                      type="text"
                      id="form control"
                      name="Name"
                      placeholder="Full Name"
                      required
                      className="w-full h-12 rounded-3xl bg-slate-100 border
                  py-2.5 px-6 text-slate-600 duration-300 focus:shadow-md focus:shadow-black dark:focus:shadow-red-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div
                  id="form-item col-6"
                  className="md:flex-[50%] max-w-[100%] mb-7 ml-1"
                >
                  <div id="form group">
                    <input
                      type="email"
                      id="form control"
                      name="Email"
                      placeholder="Email"
                      required
                      className="w-full h-12 rounded-3xl bg-slate-100 border
                  py-2.5 px-6 text-slate-600 duration-300 focus:shadow-md focus:shadow-black dark:focus:shadow-red-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div id="row">
                <div id="form-item col-12" className="max-w-full mb-7">
                  <div id="form group">
                    <input
                      type="text"
                      id="form control"
                      name="Subject"
                      placeholder="Subject"
                      className="w-full h-12 rounded-3xl bg-slate-100 border
                  py-2.5 px-6 text-slate-600 duration-300 focus:shadow-md focus:shadow-black dark:focus:shadow-red-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div id="row">
                <div id="form-item col-12" className="max-w-full mb-7">
                  <div id="form group">
                    <textarea 
                      required                   
                      id="" 
                      name="Message"                   
                      placeholder="Message"
                      className="w-full h-36 rounded-3xl bg-slate-100 border
                  py-2.5 px-6 text-slate-600 duration-300 focus:shadow-md focus:shadow-black dark:focus:shadow-red-600 focus:outline-none "
                    ></textarea>
                  </div>
                </div>
              </div>
              <div id="row">
                <div id="form-item col-12">
                  <button
                    type="submit"
                    id="btn"
                    className="h-12 px-12 mb-8 text-base font-medium bg-red-600 text-white rounded-full duration-300 hover:scale-105"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Contact;

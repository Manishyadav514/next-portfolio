import React from "react";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <div
      className="w-full h-[900px]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "norepeat",
        backgroundImage: `linear-gradient(180deg, #080808 0%, rgba(32, 32, 32, 0.2) 50%, #141414 100%), url(${"/images/abstract.jpg"})`,
      }}
    >
      {/* Image */}
      {/* <div className="hidden absolute w-full h-full flex justify-end align-center items-center overflow-hidden">
        <span className="mr-[-13px]">
          <Image
            width={200}
            height={200}
            alt="girl"
            src="/images/anime-girl.png"
          />
        </span>
      </div> */}
      {/* Text and Form Content */}
      <div className="w-full h-full py-[100px] flex lg:flex-row flex-col justify-center text-white">
        <div className="w-full h-full md:pl-24 flex px-4 md:px-8 justify-center md:justify-center md:justify-start align-center items-center overflow-hidden">
          <h2 className="md:text-4xl text-3xl font-medium text-white font-serif">
            Do you have something in mind? <br></br>I would love to hear it.
          </h2>
        </div>
        {/* Form */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex md:flex-row flex-col bg-[#fffeff] border rounded-lg ">
            <div className="hidden md:block h-full bg-pink-500 overflow-hidden rounded-lg">
              <Image
                width={200}
                height={200}
                src="/images/abstract.jpg"
                alt="dr"
              />
            </div>
            <div className="h-full p-8 flex justify-center align-middle items-center">
              <div className="p-8 bg-white border shadow-lg">
                <form>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="relative inline-block text-base group">
                      <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-700 ease-out border border-b-[3px] border-r-2 border-gray-900 rounded group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-700 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative flex flex-row gap-3 items-center">
                          Send <IoMdSend />
                        </span>
                      </span>
                    </button>
                    {/* <button className="bg-white text-gray-800 font-semibold rounded transition-colors duration-300 ease-out border-b-2  border-[#073D52] hover:border-[#073D52] hover:bg-[#0c80aa] hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                      <span className="mr-2">Send</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentcolor"
                          d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                        ></path>
                      </svg>
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

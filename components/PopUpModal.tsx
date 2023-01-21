import React from "react";
import { useState } from "react";

interface PopUpModalProps {
  iframeSRC?: string;
}
const PopUpModal = ({ iframeSRC }: PopUpModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Toggle modal
      </button>

      {/* <div
        className={`fixed top-0 right-0 left-0 bottom-0 z-50 p-8 flex justify-center bg-transparent ${
          showModal ? "visible" : "hidden"
        }`}
      >
        <iframe
          src="https://my.spline.design/clonercitycopy-41560f98bd390af2a2ac2cce446b4d87/"
          // height={1000}
          // width={1000}
          // className="w-screen h-screen"
          className="h-full w-full fixed"
        ></iframe>
      </div> */}
      <button
        className={`fixed top-0 right-0 left-0 bottom-0 z-[1000] w-[100px] h-[100px] bg-pink-500 flex justify-center bg-transparent ${
          showModal ? "visible" : "hidden"
        }`}
        type="button"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Close
      </button>
      <iframe
        src="https://my.spline.design/clonercitycopy-41560f98bd390af2a2ac2cce446b4d87/"
        // height={1000}
        // width={1000}
        // className="w-screen h-screen"
        className={`fixed top-0 right-0 left-0 bottom-0 z-50 p-8 w-full h-full flex justify-center bg-transparent ${
          showModal ? "visible" : "hidden"
        }`}
      ></iframe>
    </>
  );
};

export default PopUpModal;

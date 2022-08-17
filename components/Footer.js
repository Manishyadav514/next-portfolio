import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="text-grey-100 body-font bg-cyan-900">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
              <Link href="/">
                <p className="ml-3 text-xl cursor-pointer">
                  Fox<span className="text-teal-200">Archive</span>
                </p>
              </Link>
            </a>
            <p className="mt-2 text-sm text-gray-50">
              Thanks for making this far!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-large text-gray-100 tracking-widest text-md mb-3 uppercase">
                Dynamic/Static Website
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer ">
                    Amazon Clone
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Netflix Clone
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    React shopping Cart
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    HTML-CSS-JS Project
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-teal-200 cursor-pointer">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-073d52">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center align-middle">
            <p className="text-teal-200 text-sm text-center sm:text-left">
              © 2022 FoxArchive
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-50 ml-1"
                target="_blank"
              >
                by Manish Yadav
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

export const LinkComp = ({ linkHref, linkText, newPageOpen }) => {
  return (
    <li>
      <Link href={linkHref}>
        {newPageOpen ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-gray-50  cursor-pointer hover:text-red-200"
          >
            {linkText}
          </a>
        ) : (
          <a className="text-[16px] text-gray-50  cursor-pointer hover:text-teal-200">
            {linkText}
          </a>
        )}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="text-grey-100 bg-cyan-900 ">
      <div className=" px-5 py-24 mx-auto flex flex-row  flex-nowrap phone:flex-col items-start tablet:items-center  tablet:flex-col tablet:flex-nowrap laptop:items-center desktop:w-3/4 ">
        <div className="w-64 flex-shrink-0 flex-col tablet:mx-0 mx-auto text-center tablet:text-left">
          <a className="flex title-font font-medium items-center tablet:justify-start justify-center text-gray-100">
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
        <div className="flex-grow flex flex-wrap flex-row tablet:pl-20 -mb-10 tablet:mt-0 mt-10 tablet:text-left text-center">
          <div className="w-1/4 tablet:w-1/2 phone:w-full px-4">
            <h2 className="title-font font-large text-gray-100 tracking-widest text-md mb-3 uppercase">
              Website
            </h2>
            <nav className="list-none mb-10">
              <LinkComp
                linkHref="https://react-website-amazon-clone.vercel.app/"
                linkText="Amazon Clone"
                newPageOpen
              />
              <LinkComp
                linkHref="https://react-netflix-clone-6fa02.web.app/"
                linkText="Netflix Clone"
                newPageOpen
              />
              <LinkComp
                linkHref="https://react-shopping-cart-7f4fc.web.app/"
                linkText="React Cart"
                newPageOpen
              />
              <LinkComp
                linkHref="https://html-css-js-iota.vercel.app/index.html"
                linkText="HTML-CSS-JS"
                newPageOpen
              />
            </nav>
          </div>
          <div className="w-1/4 tablet:w-1/2 phone:w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
              Passion
            </h2>
            <nav className="list-none mb-10">
              <LinkComp linkHref="/poem" linkText="Poetry" />
              <LinkComp linkHref="photography#photo" linkText=" Photography" />
              <LinkComp linkHref="/photography#design" linkText="Photoshop" />
            </nav>
          </div>
          <div className="w-1/4 tablet:w-1/2 phone:w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <LinkComp linkHref="#" linkText="Link" />
              <LinkComp linkHref="#" linkText="Link" />
              <LinkComp linkHref="#" linkText="Link" />
              <LinkComp linkHref="#" linkText="Link" />
            </nav>
          </div>
          <div className="phone:w-full px-4 w-1/4 tablet:w-1/2 ">
            <h2 className="font-medium text-gray-100 tracking-widest text-md mb-3 uppercase">
              Connect With Us
            </h2>
            <nav className="list-none mb-10">
              <LinkComp linkHref="/about" linkText=" About Us" />
              <LinkComp linkHref="/contact" linkText="Contact Us" />
              <LinkComp
                linkHref="https://www.instagram.com/awareness_hall/"
                linkText="Instagram"
                newPageOpen
              />
              <LinkComp linkHref="#" linkText="manish.yadav.elit@gmail.com" />
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-073d52 py-4 px-5 flex flex-wrap justify-center align-middle">
        <p className="text-teal-200 text-xl phone:text-sm text-center cursor-pointer tablet:text-left">
          © 2022 FoxArchive
          <a className="text-gray-50 ml-2">by Manish Yadav</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

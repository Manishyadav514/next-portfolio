import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-aquaDark1 ">
        <div className="max-w-[1300px] px-5 py-16 mx-auto flex lg:flex-row flex-nowrap flex-col lg:items-start md:flex-nowrap items-center lg:w-3/4 ">
          <div className="flex  text-center md:text-left">
            <div className="flex font-medium items-center  justify-center text-gray-100">
              <Link legacyBehavior href="/">
                <p className="ml-3 text-xl cursor-pointer">
                  Dear<span className="text-teal-200">Senpai</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="flex-grow flex flex-wrap flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              {menuLink.map((item: any) => (
                <MenuLinks
                  label={item.label}
                  slug={item.slug}
                  child={item.child}
                  key={item.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] lg:hidden block p-0 m-0 right-0">
          <div className="w-full h-full flex justify-end items-end">
            <Image
              width={400}
              height={351}
              alt="/images/spirited.png"
              src="/images/spirited.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#051a28] py-4 px-5 flex flex-wrap justify-center align-middle">
        <p className="text-teal-200 lg:text-xl text-sm text-center cursor-pointer md:text-left">
          © 2022 DearSenpai
          <a className="text-gray-50 ml-2">by Manish Yadav</a>
        </p>
      </div>
    </footer>
  );
};

const MenuLinks = ({
  label,
  slug,
  child,
}: {
  label: string;
  slug: string;
  child: any | undefined;
}) => {
  return (
    <div key={slug} className="lg:w-1/4 md:w-1/2 w-full px-4 ">
      <h2 className="title-font font-large text-gray-100 tracking-widest text-base md:text-lg mb-1 uppercase">
        {label}
      </h2>
      <nav className="list-none mb-10">
        {child.map((subChild: any, index: number) => (
          <div key={`${subChild.label}-${index}`}>
            <Link legacyBehavior href={subChild.slug}>
              {subChild?.newPageOpen ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize text-sm md:text-base text-gray-50  cursor-pointer hover:text-red-200"
                >
                  {subChild?.labl}
                </a>
              ) : (
                <a className="capitalize text-sm md:text-base text-gray-50  cursor-pointer hover:text-teal-200">
                  {subChild?.label}
                </a>
              )}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

const menuLink = [
  {
    label: "website",
    slug: "#",
    child: [
      {
        label: "amazon clone",
        slug: "https://react-website-amazon-clone.vercel.app/",
        newPage: true,
      },
      {
        label: "netflix clone",
        slug: "https://react-netflix-clone-6fa02.web.app/",
        newPage: true,
      },
      {
        label: "react cart",
        slug: "https://react-shopping-cart-7f4fc.web.app/",
        newPage: true,
      },
      {
        label: "html-css-js",
        slug: "https://html-css-js-iota.vercel.app/index.html",
        newPage: true,
      },
      {
        label: "AnimeTV",
        slug: "https://react-netflix-clone-6fa02.web.app/",
        newPage: true,
      },
    ],
  },
  {
    label: "Passion",
    slug: "#r34tr34",
    child: [
      { label: "poetry", slug: "/poem" },
      { label: "photography", slug: "/photography#photo" },
      { label: "photoshop", slug: "/photography#design" },
      { label: "blog", slug: "/blog" },
    ],
  },
  {
    label: "Trending",
    slug: "#34",
    child: [
      { label: "Naruto", slug: "/populadsr" },
      { label: "One Piece", slug: "/populsfwar" },
      { label: "Summer Rendering", slug: "/p2opular" },
      { label: "Attack On Titan", slug: "/popvular" },
    ],
  },
  {
    label: "connect with us",
    slug: "#34r3",
    child: [
      { label: "about us", slug: "/about" },
      { label: "contact us", slug: "/contact" },
      {
        label: "instagram",
        slug: "https://www.instagram.com/awareness_hall/",
        newPage: true,
      },
      { label: "email", slug: "/34popular" },
    ],
  },
];

export default Footer;

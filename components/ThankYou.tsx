import React from "react";
import Image from "next/image";

interface ThankYouProps {
  label: string;
  darkButton: boolean;
}

export const ThankYou = () => {
  return (
    <div className=" w-full p-16 phone:p-8 text-aquaLight1 bg-aquaDark2 bg- flex flex-row gap-16 phone:gap-4 phone:flex-col justify-center items-center align-middle text-center">
      <div className="">
        <h1 className="font-bold  text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13">
          Thanks<span className="text-aquaBright4"> for</span>
        </h1>
        <p className="my-5 minmd:my-10  font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 ">
          making this far.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src="/images/anya.png"
          alt="/images/ThankYou_png"
        />
      </div>
    </div>
  );
};

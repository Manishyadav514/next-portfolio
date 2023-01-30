import React from "react";
import Image from "next/image";

interface ThankYouProps {
  labelPrimary: string;
  labelSub: string;
  labelSecondry: string;
  imagedata: { src: string; width: number; height: number };
}

export const ThankYou = ({
  labelPrimary,
  labelSub,
  labelSecondry,
  imagedata,
}: ThankYouProps) => {
  return (
    <div className=" w-full p-16 phone:p-8 text-aquaLight1 bg-aquaDark2 bg- flex flex-row gap-16 phone:gap-4 phone:flex-col justify-center items-center align-middle text-center">
      <div className="">
        <h1 className="font-bold  text-5xl phone:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13">
          {labelPrimary}
          <span className="text-aquaBright4"> {labelSub}</span>
        </h1>
        <p className="my-5 minmd:my-10  font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 ">
          {labelSecondry}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={imagedata.width}
          height={imagedata.height}
          src={imagedata.src}
          alt={imagedata.src}
        />
      </div>
    </div>
  );
};

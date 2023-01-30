import React from "react";
import { ThankYou } from "../components/ThankYou";

const photography = () => {
  return (
    <div>
      <ThankYou
        labelPrimary="Welcome"
        labelSub="to"
        labelSecondry="my photography section"
        imagedata={{ src: "/svg/m-girl.svg", height: 500, width: 500 }}
      />
    </div>
  );
};

export default photography;

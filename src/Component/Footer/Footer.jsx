import React from "react";
import LinksDetails from "./LinksDetails";

const Footer = () => {
  return (
    <div className="h-[100%] flex flex-col mt-10 bg-[#263238] text-white ">
      <div className="w-[60%] mx-auto sm:grid grid-cols-4 gap-10 border-b-2 py-5 mb-5 ">
        <LinksDetails
          heading="Find us"
          firstLink=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s"
        />
        <LinksDetails
          heading="Find us"
          firstLink="Remove Background"
          secondLink="Shadows & Mirror Reflection"
          thirdLink="Vectorization"
          fourthLink="Image Cropping"
        />
        <LinksDetails
          heading="Find us"
          firstLink="Remove Background"
          secondLink="Shadows & Mirror Reflection "
          thirdLink="Vectorization "
          fourthLink="Image Cropping"
        />
        <LinksDetails
          heading="Follow us"
          firstLink=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          secondLink="Lorem Ipsum is simply dummy text of the printing...https://www.lipsum.com/"
        />
      </div>
    </div>
  );
};

export default Footer;

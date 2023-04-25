import React from "react";
// import LinksDetails from "./LinksDetails";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <div className="h-[100%] flex flex-col mt-10 bg-[#263238] text-white ">
      <div className="w-[60%] mx-auto sm:grid grid-cols-4 gap-10 border-b-2 py-5 mb-5 ">
        <div>
          <h2 className="font-semibold py-4 ">Find us</h2>
          <ul>
          <a href="/#home">
            <li className="my-2">Home</li>
          </a>
          <a href="/#offer">
            <li className="my-2">Latest Offer</li>
          </a>
          <a href="/#products">
            <li className="my-2">Products</li>
          </a>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold py-4 ">Find us</h2>
          <ul>
          <Link to="/#home">
            <li className="my-2">Remove Background </li>
          </Link>
          <Link to="/#offer">
            <li className="my-2">Shadows & Mirror Reflection</li>
          </Link>
          <Link to="/#products">
            <li className="my-2">Vectorization</li>
          </Link>
          <Link to="/#products">
            <li className="my-2">Image Cropping</li>
          </Link>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold py-4 ">Find us</h2>
          <ul>
          
            <li className="my-2">Remove Background </li>
   
            <li className="my-2">Shadows & Mirror Reflection</li>

        
            <li className="my-2">Vectorization</li>

            <li className="my-2">Image Cropping</li>
  
          </ul>
        </div>
        {/* <LinksDetails
          links={weblinks}
          heading="Find us"
          firstLink="Home"
          secondLink="Latest Offer"
          thirdLink="Products"
        /> */}
        {/* <LinksDetails
          links={weblinks}
          heading="Find us"
          firstLink="Remove Background"
          secondLink="Shadows & Mirror Reflection"
          thirdLink="Vectorization"
          fourthLink="Image Cropping"
        /> */}
        {/* <LinksDetails
          links={weblinks}
          heading="Find us"
          firstLink="Remove Background"
          secondLink="Shadows & Mirror Reflection "
          thirdLink="Vectorization "
          fourthLink="Image Cropping"
        /> */}
        {/* <LinksDetails
          heading="Follow us"
          firstLink=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          secondLink="Lorem Ipsum is simply dummy text of the printing...https://www.lipsum.com/"
        /> */}
      </div>
    </div>
  );
};

export default Footer;

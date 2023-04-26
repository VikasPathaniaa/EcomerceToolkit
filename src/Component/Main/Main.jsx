import React, { useEffect, useState } from "react";
import ProdcutSection from "../../ProductSection/ProdcutSection";
import Testimonial from "../Testimonial/Testimonial";

const Main = () => {
  // const [hours, setHours] = useState(1);
  // const [min, setMin] = useState(60);
  // const [sec, setSec] = useState(60);

  // useEffect(() => {
  //    setInterval(() => {
  //       if (sec == 60) {
  //         setSec((prevValue) => prevValue - 1);
  //       }
  //       if(sec== 0 && min==60){
  //         setMin(min-1)
  //         setSec(60)
  //       }
  //       if(min==0 && hours==1 ){
  //         setHours(hours-1)
  //       }
  //     }, 1000)
  // }, []);
  return (
    <>
      <div
        id="offer"
        className=" bg-[#263238] w-[50%] mx-auto rounded-md py-2 mb-4"
      >
        <h2 className="text-white text-center text-lg tracking-widest">
          Latest offer 50% off
        </h2>
      </div>
      <div className="flex justify-center">
        <img className="rounded" src="/assets/clothes.jpg" alt="clothes img " />
      </div>
      <div>
        <img
          src="/assets/banner.jpg"
          alt="banner is not defined "
          className="shadow-[0px_1px_7px_3px_#a0aec0] my-8 my-element transform scale-90"
        />
        {/* <div>{hours}{min}{sec}</div> */}
      </div>
      <ProdcutSection />
      <Testimonial/>
    </>
  );
};

export default Main;

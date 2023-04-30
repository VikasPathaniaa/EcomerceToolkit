import React from "react";
import Slider from "react-slick";
import data from "./data.json";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Testimonial = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <GrFormPrevious className="border-solid border-black	rounded-2xl	"/>,
    nextArrow: <GrFormNext className="border-solid border-black	rounded-2xl	" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className:"testimonial"
        },
      },
    ],
  };
  return (
    <div className="w-[90%] mx-auto shadow-lg flex justify-center flex-col">
      <div className="flex justify-center ">
      <h4> Testimonial </h4>
      </div>
      <Slider
        {...settings}
        style={{
          width: "800px",
          height: "400px",
          display: "flex",
          margin:"auto",
          justifyContent: "center",
          // alignContent: "center",
          padding: "2px",
        }}
        // Override Slider style
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center shadow-2xl  p-4 m-2 testimonial"
              style={{ width: "30%", height: "40%", margin: "8px" }}
              // Set item width, height, and margin
            >
              <img src={item.img} alt="testimonial" height={100} width={100}  className="rounded-[10px]  mx-auto slider-image"/>
              <p className="fontSize-[10]">{item.says}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;

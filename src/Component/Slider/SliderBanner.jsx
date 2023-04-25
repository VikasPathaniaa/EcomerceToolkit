import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../Fetaures/SliderSlice/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import data from "./data.json";

const SliderBanner = () => {
  const value = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log(value);
  return (
      <div className="relative">
          {data.map((ele, index) => {
            return (
              <div
                key={ele.id}
                className={
                  value === ele.id
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-70 duration-700 ease-in-out scale-95"
                }
              >
                {ele.id === value && (
                  <img
                    className="h-full w-full"
                    src={ele.img}
                    alt="slider img"
                  />
                )}
                {/* <div className="fixed top-10 mx-auto  bg-black opacity-20 ">
                  <p className="text-white text-2xl font-inter font-bold sm:text-xs text-center p-5 ">
                    {ele.id === value && ele.title}
                  </p>
                </div> */}
              </div>
            );
          })}
       
        <div className=" flex absolute bottom-[10%] left-[30%]  md:left-[45%] ">
          {data.map((dot, index) => {
            return (
              <div className="m-4" key={dot.id}>
                <div
                  className={
                    index === value
                      ? "bg-[#263238] rounded-full p-4 cursor-pointer"
                      : "bg-white rounded-full p-4 cursor-pointer"
                  }
                  onClick={()=>dispatch(dotSlide(index))}
                ></div>
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-[50%] right-0 bg-white p-2 rounded-full hover:bg-green-300"
          onClick={() => dispatch(nextSlide(value + 1))}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%]  bg-white p-2 rounded-full hover:bg-green-300"
          onClick={() => dispatch(prevSlide(value - 1))}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    
  );
};

export default SliderBanner;

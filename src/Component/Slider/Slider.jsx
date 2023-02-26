import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../Fetaures/SliderSlice/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import data from "./data.json";

const Slider = () => {
  const value = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div>
      <div className="relative pb-4">
        <div>
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
                    className="h-[500px] w-full"
                    src={ele.img}
                    alt="slider img"
                  />
                )}
                <div className="absolute top-44 mx-auto inset-x-1/4 ">
                  <p className="text-white text-2xl font-inter font-bold ">
                    {ele.id === value && ele.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex absolute bottom-20 left-[45%]">
          {data.map((dot, index) => {
            return (
              <div className="m-4" key={dot.id}>
                <div
                  className={
                    index === value
                      ? "bg-green-300 rounded-full p-4 cursor-pointer"
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
            fill="none"
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
            fill="none"
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
    </div>
  );
};

export default Slider;

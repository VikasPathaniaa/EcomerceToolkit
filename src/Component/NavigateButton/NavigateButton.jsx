import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../ResuableComponent/Button";

const NavigateButton = () => {
  const button = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];
  return (
    <>
      <div>
        <div className="w-[50%] flex-col justify-between mx-auto text-center md:grid grid-cols-2 lg:grid-cols-4">
        {button.map((button, index) => {
          return (
            <div key={index} className="w-max-content mx-4 p-2">
              <Link to={`/filteredProducts/${button}`}>
                <ButtonComponent
                  title={button}
                  customStyle={
                    " h-[80%]  capitalize rounded-lg font-bold py-2 px-4 rounded mr-4"
                  }
                />

                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 ">
                  {button}
                </button> */}
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default NavigateButton;

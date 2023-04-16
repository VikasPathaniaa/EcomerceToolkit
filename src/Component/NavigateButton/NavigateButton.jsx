import React from "react";
import { Link } from "react-router-dom";


const NavigateButton = () => {
  const button = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {button.map((button, index) => {
          return (
            <div key={index} className="my-6">
              <Link to={`/filteredProducts/${button}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 ">
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavigateButton;

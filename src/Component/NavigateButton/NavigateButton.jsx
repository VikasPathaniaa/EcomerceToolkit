import React from "react";

const NavigateButton = () => {
  const button = ["t-shirt", "Jeans", "Hoddies", "Shoes", "Jwellery"];
  return (
    <div>
    <div className="flex justify-center">
      {button.map((button, index) => {
        return (
          <>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 ">
              {button}
            </button>
          </>
        );
      })}
    </div>
    <div className="h-[50px] w-[500px] bg-green-300 rounded-full mx-auto mt-5 mb-4">
      <h2 className="text-orange-400 text-center underline font-bold p-4"> Latest offer 50% off</h2>
    </div>
    <div className="flex justify-center">
      <img className="rounded" src="/assets/clothes.jpg" alt="clothes image "/>
    </div>
    </div>
  );
};

export default NavigateButton;

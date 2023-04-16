import React from 'react';

const Main = () => {
  return (
    <>
    <div className="h-[50px] w-[200px] bg-green-300 rounded-full mx-auto mt-5 mb-4">
        <h2 className="text-orange-400 text-center underline font-bold p-4">
          {" "}
          Latest offer 50% off
        </h2>
      </div>
      <div className="flex justify-center">
        <img className="rounded" src="/assets/clothes.jpg" alt="clothes img " />
      </div>
      <div>
        <img src="/assets/banner.jpg" alt="banner is not defined " className="shadow-[0px_1px_7px_3px_#a0aec0] my-8 my-element transform scale-90" /> 
      </div>
    </>
  );
}

export default Main;

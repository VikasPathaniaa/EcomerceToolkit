import React from "react";


const Navbar = () => {
  return (
    <>
      <div className="bg-black  p-2">
        {" "}
        <h1 className="text-white text-2xl  font-bold text-center">
          {" "}
          Welcome to My Store{" "}
        </h1>{" "}
      </div>
      <div className="flex justify-around ">
        <div>
          <img src="/assets/logo.png" alt="logo" width="150px" />
        </div>
        <div className="flex flex-row items-center ml-5">
          <div className="mr-2  ">
            <button>Logout</button>
          </div>
          <div>
            <img src="/assets/heart.png" alt="heart logo" width="15px" />
          </div>
          <p className="font-semibold"> Wish List </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <p className="font-semibold"> Shopping bag </p>
        </div>
      </div>
      <div className="flex flex-row justify-around w-full bg-black text-white p-3 ">
        <div>50% off</div>
        <div>Free Shipping And returns </div>
        <div>Different Payment Methods  </div>

      </div>
    </>
  );
};

export default Navbar;

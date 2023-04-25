import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Fetaures/AuthSlice/LoginSlice";
import { useDispatch } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const { totalAmmount } = useSelector((state) => state.cartSlice);
  const { name, imgUrl } = useSelector((state) => state.LoginSlice.user);

  const navHandel = () => {
    setOpenNav(true);
  };
  return (
    <div id="home" className="">
      <div className="bg-[#5651e5]   p-2">
        {" "}
        <h1 className="text-white text-2xl  font-bold text-center">
          {" "}
          Welcome to My Store{" "}
        </h1>{" "}
      </div>
      <div className="flex justify-around bg-white items-center h-[12vh]">
        <div className={openNav && "hidden"}>
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" width="150px" />
          </Link>
        </div>
        <div className="hidden sm:hidden md:flex flex-row items-center ml-5">
          <div className="mr-2 cursor-pointer ">
            <div onClick={() => dispatch(logout())}>Logout</div>
          </div>
          <Link to="/cart">
            <div className="flex f-row items-center">
              {totalAmmount > 0 ? (
                <p className="rounded-full bg-gray-300 px-2 ml-2">
                  {" "}
                  {totalAmmount}{" "}
                </p>
              ) : (
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
              )}
              <p className="font-semibold"> Shopping bag </p>
            </div>
          </Link>
          <div className="flex flex-row justify-between w-[120px] items-center p-4 cursor-pointer">
            <Avatar src={imgUrl} alt="avatar" variant="circular" size="xs" />
            <span className="">
              Hii {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
          </div>
        </div>
        {!openNav &&
          <div className="md:hidden">
          <GiHamburgerMenu onClick={navHandel} />
        </div> 
        }
        
      </div>
       <div className = { openNav ? "h-screen !important w-full bg-black bg-opacity-25 fixed z-10 top-0" : "hidden" } > </div>
      <div className={openNav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200 z-20 " : "fixed left-[-500px] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500" }>
       
       { openNav &&
        <RxCross1  onClick={()=> setOpenNav(false)} className="float-right " />
       }
       <div className=" flex flex-col justify-start mt-9">
        <div>
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" width="150px" />
          </Link>
        </div>
        <div className="flex flex-row justify-between w-[120px] items-center p-4 cursor-pointer">
            <Avatar src={imgUrl} alt="avatar" variant="circular" size="xs" />
            <span className="">
              Hii {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
          </div>
        <div className="">
          <Link to="/cart">
            <div className="flex f-row items-center">
              {totalAmmount > 0 ? (
                <p className="rounded-full bg-gray-300 px-2 ml-2">
                  {" "}
                  {totalAmmount}{" "}
                </p>
              ) : (
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
              )}
              <p className="font-semibold"> Shopping bag </p>
            </div>
          </Link>
         
        </div>
        <div className="ml-4 mt-3 cursor-pointer " onClick={() => dispatch(logout())}>
            Logout
          </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;

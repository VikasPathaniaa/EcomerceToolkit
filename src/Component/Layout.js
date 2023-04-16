import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Slider from "../Component/Slider/index";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Slider />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;

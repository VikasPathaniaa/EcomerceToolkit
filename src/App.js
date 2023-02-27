import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Component/Main/Main";
import FilteredProducts from "./Component/FilteredProducts/FilteredProducts";
import Product from "./Component/FilteredProducts/Product";
const App = () => {
  console.log("Api url " ,process.env.REACT_APP_PRODUCT_API);
  console.log("NAME " ,process.env.REACT_APP_NAME);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredproducts/:type" element={<FilteredProducts />} />
          <Route path="/product/:type/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

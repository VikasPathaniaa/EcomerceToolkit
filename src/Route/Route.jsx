import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from '../Component/Main/Main';
import FilteredProducts from '../Component/FilteredProducts/FilteredProducts';
import Product from '../Component/FilteredProducts/Product';
import Cart from '../Component/cart/Cart';
import ErrorPage from '../PageNotFound/ErrorPage';
const PagesRoute = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredproducts/:type"
            element={<FilteredProducts />}
          />
          <Route path="/product/:type/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
}

export default PagesRoute;

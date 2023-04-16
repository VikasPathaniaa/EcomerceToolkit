import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Component/Main/Main";
import FilteredProducts from "./Component/FilteredProducts/FilteredProducts";
import Product from "./Component/FilteredProducts/Product";
import { useSelector } from "react-redux";
import ErrorPage from "./PageNotFound/ErrorPage";
import Cart from "./Component/cart/Cart";
const App = () => {
  console.log("Api url ", process.env.REACT_APP_PRODUCT_API);
  // console.log("NAME ", process.env.REACT_APP_NAME);

  // const cart = useSelector((state) => state.cartSlice.cart);
  // const totalAmmount = useSelector((state) => state.cartSlice.totalAmmount);
  // const totalPrice = useSelector((state) => state.cartSlice.totalPrice);

  // console.log("cart", cart);
  // console.log("totalAmmount", totalAmmount);
  // console.log("totalPrice", totalPrice);
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
};

export default App;

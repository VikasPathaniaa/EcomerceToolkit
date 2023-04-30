import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Fetaures/CartSlice/cartSlice";
import { singleProduct } from "../../Fetaures/ProductSlice/productSlice";
import ButtonComponent from "../ResuableComponent/Button";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //* request for get data with the help of dispatch the function
  useEffect(() => {
    dispatch(singleProduct(id));
  }, [id]);

  const Product = useSelector((state) => state.productSlice.Product);

  function handleClick() {
    dispatch(
      addToCart({
        id: Product.id,
        price: Product.price,
        amount: 1,
        totalPrice: Product.price,
        img: Product.image,
        title: Product.title,
      })
    );
  }
  return (
    <div className="shadow-md p-8 mx-auto w-[800px] mt-[100px] flex flex-col ">
      <div className="flex flex-row justify-center">
        <img
          src={Product.image}
          alt="img  not found "
          className="w-[300px] h-[400px] shadow-lg shadow-gray-500/50 p-6"
        />
        <div className="flex justify-center flex-col p-4">
          <div>{Product.category}</div>
          <div className="text-orange-700 font-bold">15% off</div>
          <div>{Product.title}</div>
        </div>
      </div>
      <ButtonComponent
        title="Add To Cart"
        customStyle=" w-[50%] m-auto mt-4"
        onClick={handleClick}
        
      />
      {/* <Button
            variant="outlined"
            className="border-solid border-2 border-gray-500  w-[50%] m-auto mt-4"
            color="gray"
            ripple={true}
            onClick={() =>
              dispatch(
                addToCart({
                  id: Product.id,
                  price:Product.price,
                  ammount:1,
                  totalPrice:Product.price,
                  img:Product.image,
                  title:Product.title
                })
              )
            }
          >
            Add To Cart
          </Button> */}
    </div>
  );
};

export default Product;

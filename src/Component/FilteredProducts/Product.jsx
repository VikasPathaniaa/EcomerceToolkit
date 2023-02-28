import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleProduct } from "../../Fetaures/Api/api";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
 
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  //* request for get data with the help of dispatch the function
  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch , id]);

  const Product = useSelector((state) => state.productSlice.Product);

  console.log("********", Product);

  return (
    <div className="flex flex-col lg:flex-row justify-center shadow-md p-8 mx-auto w-[800px] mt-[100px]">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={Product.image}
          alt="img  not found "
          className="w-[300px] h-[400px] shadow-lg shadow-gray-500/50 p-6"
        />
      </div>
      <div className="lg:w-1/2 flex justify-center flex-col p-4">
        <div>{Product.category}</div>
        <div className="text-orange-700 font-bold">15% off</div>
        <div>{Product.title}</div>
        <Tooltip content="Add to Cart " placement="button">
          <Button variant="outlined" className="border-solid border-2 border-gray-500 mt-4 lg:mt-12" color="gray" ripple={true}>Add To Cart</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Product;

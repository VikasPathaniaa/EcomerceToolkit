import React, { useEffect } from "react";
import ProductSectionCard from "./ProductSectionCard";
import { getData } from "../Fetaures/ProductSlice/productSlice";
import { useSelector, useDispatch } from "react-redux";

function ProdcutSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { list } = useSelector((state) => state.productSlice);
  console.log(list);
  return (
    <div className=" w-[90%] m-auto">
      <div className=" bg-black w-[50%] mx-auto rounded-md py-2">
        <h2 className="text-red-600 text-center text-lg tracking-widest">
          Summer Sale 30%
        </h2>
      </div>

      <div className="py-8 gap-4 m-auto sm:grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
        {list?.filter((element) => {
            return (
              element.category !== "electronics" &&
              element.category !== "jewelery"
            );
          }).map((item, index) => {
            return (
              <ProductSectionCard
              key={item.id}
                id={item.id}
                description={item?.description}
                category={item?.category}
                image={item?.image}
                price={item?.price}
                title={item?.title}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProdcutSection;

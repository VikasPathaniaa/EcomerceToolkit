import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Fetaures/ProductSlice/productSlice";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";
import { Dna } from "react-loader-spinner";

const FilteredProducts = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { list, isloading } = useSelector((state) => state.productSlice);

  return (
    <>
      <Navbar />
      {isloading ? (
        <div className="flex items-center justify-center h-screen">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          <div className="pt-14">
            <div className="py-16">
              <h1 className="text-4xl font-bold text-gray-600"> {type}</h1>
            </div>
            <div className="grid grid-cols-4 py-8 gap-12 justify-items-center">
              {list
                .filter((element) => {
                  return element.category === type;
                })
                .map((element) => {
                  return (
                    <ProductCard
                      img={element.image}
                      title={element.title}
                      id={element.id}
                      category={element.category}
                    />
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilteredProducts;

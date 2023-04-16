import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Dna } from "react-loader-spinner";
import { getData } from "../../Fetaures/ProductSlice/productSlice";

const FilteredProducts = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  
  const { list, isloading } = useSelector((state) => state.productSlice);

  return (
    <>
      
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
          <div className="pt-14 container mx-auto">
            <div className="py-16">
              <h1 className="text-4xl font-bold text-gray-600 text-center capitalize">
                {type}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
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
                      price={element.price}
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

import React, { useState, useEffect } from "react";
import ProductSectionCard from "./ProductSectionCard";
import { getData } from "../Fetaures/ProductSlice/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@material-tailwind/react";
function ProdcutSection() {
  const [searchCategory, setSearchCategory] = useState("");
  const searchCategoryWithoutSpacesAndCommas = searchCategory.replace(
    /[\s,]+/g,
    ""
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { list } = useSelector((state) => state.productSlice);
  console.log(list);
  return (
    <div className=" w-[90%] m-auto" id="products">
      <div className=" bg-[#263238] w-[50%] mx-auto rounded-md py-2">
        <h2 className="text-white text-center text-lg tracking-widest">
          Summer Sale 30%
        </h2>
      </div>
      <div className="flex flex-row justify-around p-6">
        <h4> Search your Clothing Category </h4>
        <div className="w-72">
          <Input
            label="Search By Category "
            type="text"
            onChange={(event) =>
              setSearchCategory(event.target.value.toLowerCase())
            }
          />
        </div>
      </div>

      <div className="py-8 gap-4 m-auto sm:grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
        {list
          .filter((element) => {
            if (!searchCategory) {
              return true; // Return all products if searchCategory is empty or null
            }

            const searchCategoryWithoutSpecialSymbols = searchCategory
              .replace(/[^\w\s]/gi, "")
              .toLowerCase();
            const productCategory = element.category
              .replace(/[^\w\s]/gi, "")
              .toLowerCase();
            return productCategory.includes(
              searchCategoryWithoutSpecialSymbols
            );
          })
          .map((item) => (
            <ProductSectionCard
              key={item.id}
              id={item.id}
              description={item.description}
              category={item.category}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}

        {list.length > 0 &&
          list.filter((element) => {
            if (!searchCategory) {
              return true; // Return all products if searchCategory is empty or null
            }
            return element.category
              .toLowerCase()
              .includes(searchCategoryWithoutSpacesAndCommas.toLowerCase());
          }).length === 0 && (
            <div className="">
              <p>No category found</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default ProdcutSection;

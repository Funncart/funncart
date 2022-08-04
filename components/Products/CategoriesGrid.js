import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import NoProductFound from "./NoProductFound";

const style = {
  wrapper:
    "flex flex-col md:flex-row w-[80%] md:w-[95%] lg:w-[70%] mx-auto justify-around gap-6 flex-wrap my-6",
};

const CategoriesGrid = ({ category, data }) => {
  let filteredData = [];
  if (category !== "allproducts") {
    filteredData = data.filter((item) => item.category === category);
  } else {
    filteredData = data;
  }
  console.log(filteredData);
  return (
    // receive the category from the previous function and show the data accordingly
    <div className={style.wrapper}>
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          console.log(item);
          return <SingleProduct item={item} />;
        })
      ) : (
        <NoProductFound />
      )}
    </div>
  );
};

export default CategoriesGrid;

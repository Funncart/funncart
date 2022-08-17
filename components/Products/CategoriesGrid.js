import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import NoProductFound from "./NoProductFound";

const style = {
  wrapper:
    "flex flex-wrap w-[99%] md:w-[95%] lg:w-[70%] gap-2 md:gap-8 mx-auto justify-around sm:justify-center",
};

const CategoriesGrid = ({ category, data }) => {
  let filteredData = [];
  if (category !== "allproducts") {
    filteredData = data.filter(
      (item) => item.category.toUpperCase() === category.toUpperCase()
    );
  } else {
    filteredData = data;
  }
  console.log(filteredData);
  return (
    // receive the category from the previous function and show the data accordingly
    <div className={style.wrapper}>
      {data.length > 0 ? (
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

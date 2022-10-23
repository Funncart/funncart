import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import CategoriesNav from "./CategoriesNav";
import CategoriesGrid from "./CategoriesGrid";
import client from "../../pages/api/client";
import Cookies from "js-cookie";
const style = {
  wrapper: "bg-[#F5F4F4] ",
  catergoriesContainer:
    "flex flex-col items-center justify-center my-3 md:my-8",
  productsGrid: "flex flex-col items-center justify-center py-4 md:py-12",
  smallHeading:
    "mb-8 border-b-2 border-stone-200 text-xl md:text-2xl max-w-fit mx-auto py-2 text-green-900 ",
};

const Products = () => {
  const [category, setCategory] = useState("allproducts");
  const [product, setProduct] = useState([]);
  const handleClickedCategory = (value) => {
    Cookies.set("clickedNav", value);
    setCategory(value);
  };
  // sending the request to get the data from the server of sanity
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "allProduct"]`);
      setProduct(p);
    };
    fetchData();
  }, []);
  // console.log(product);
  let categoryHeading;
  if (category == "allproducts") {
    categoryHeading = "All Products";
  }
  if (category == "tabletop") {
    categoryHeading = "Table Top";
  }
  if (category == "vintage") {
    categoryHeading = "Vintage";
  }
  console.log(category);
  if (category == "lightsandlamps") {
    categoryHeading = "Lights and Lamps";
  }
  if (category == "hourglass") {
    categoryHeading = "Hour Glass";
  }
  if (category == "mirrorcomb") {
    categoryHeading = "Mirror Comb";
  }
  if (category == "woodenartifacts") {
    categoryHeading = "Wooden Artifacts";
  }

  return (
    <div className={style.wrapper}>
      <Header headingText="OUR CATEGORIES" />
      {/* adding the categories */}

      <div className={style.catergoriesContainer}>
        <h2
          className={style.smallHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          Categories
        </h2>
        <CategoriesNav clickedCategory={handleClickedCategory} />
      </div>
      {/* add the products rendering function */}
      <div className={style.productsGrid}>
        <h2
          className={style.smallHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          {categoryHeading}
        </h2>

        <CategoriesGrid category={Cookies.get('clickedNav')|| 'allproducts'} data={product} />
      </div>
    </div>
  );
};

export default Products;

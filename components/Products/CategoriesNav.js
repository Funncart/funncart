import React, { useState } from "react";

const style = {
  wrapper:
    "my-8 flex items-center justify-around w-[100%] md:w-[60%] lg:w-[50%] mx-auto flex-wrap",
};

const CategoriesNav = (props) => {
  const [Click, setClick] = useState("allproducts");
  const handleNavClick = (value) => {
    setClick(value);
    props.clickedCategory(value);
  };
  return (
    <ul className={style.wrapper} style={{ fontFamily: "Poppins, sans-serif" }}>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "allproducts" && " font-bold "
        }`}
        onClick={() => handleNavClick("allproducts")}
      >
        All Products
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "vintage" && " font-bold "
        }`}
        onClick={() => handleNavClick("vintage")}
      >
        Vintage
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "clothes" && " font-bold "
        }`}
        onClick={() => handleNavClick("clothes")}
      >
        Clothes
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "watches" && " font-bold "
        }`}
        onClick={() => handleNavClick("watches")}
      >
        Watches
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "shoes" && " font-bold "
        }`}
        onClick={() => handleNavClick("shoes")}
      >
        Shoes
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "electronics" && " font-bold "
        }`}
        onClick={() => handleNavClick("electronics")}
      >
        Electronics
      </li>
      <li
        className={`text-stone-500 border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "books" && " font-bold "
        }`}
        onClick={() => handleNavClick("books")}
      >
        Books
      </li>
    </ul>
  );
};

export default CategoriesNav;

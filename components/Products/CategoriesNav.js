import React, { useState } from "react";
import Cookies from "js-cookie";
const style = {
  wrapper:
    "my-8 flex items-center justify-around w-[100%] md:w-[60%] lg:w-[50%] mx-auto flex-wrap font",
};

const CategoriesNav = (props) => {
  const [Click, setClick] = useState(
    Cookies.get("clickedNav") || "allproducts"
  );
  const handleNavClick = (value) => {
    setClick(value);
    props.clickedCategory(value);
  };
  return (
    <ul className={style.wrapper} style={{ fontFamily: "Poppins, sans-serif" }}>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "allproducts" && " font-bold "
        }`}
        onClick={() => handleNavClick("allproducts")}
      >
        All Products
      </li>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "vintage" && " font-bold "
        }`}
        onClick={() => handleNavClick("vintage")}
      >
        Vintage
      </li>

      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "tabletop" && " font-bold "
        }`}
        onClick={() => handleNavClick("tabletop")}
      >
        Table Top
      </li>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "lightsandlamps" && " font-bold "
        }`}
        onClick={() => handleNavClick("lightsandlamps")}
      >
        Lights and Lamp
      </li>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "hourglass" && " font-bold "
        }`}
        onClick={() => handleNavClick("hourglass")}
      >
        Hourglass
      </li>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "mirrorcomb" && " font-bold "
        }`}
        onClick={() => handleNavClick("mirrorcomb")}
      >
        Mirror Comb
      </li>
      <li
        className={`text-primary border-move-animation-products cursor-pointer mx-4 my-2 ${
          Click == "woodwork" && " font-bold "
        }`}
        onClick={() => handleNavClick("woodwork")}
      >
        Wood Work
      </li>
    </ul>
  );
};

export default CategoriesNav;

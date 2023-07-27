import React from "react";
import Products from "../../components/Products/Products";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
const style = {};
// Cookies.set("clickedNav", "lightsandlamps");
const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={"jewellery"} categoryHeading={'JEWELLERY'}/>
    </Animator>
  );
};

export default ProductsRoute;

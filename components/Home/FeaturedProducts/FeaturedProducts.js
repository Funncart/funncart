import React, { useState, useEffect } from "react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import SingleProduct from "../../SingleProduct/SingleProduct";
import client from "../../../pages/api/client.js";
const style = {
  wrapper: "px-4 py-4",
  headingContainer: "flex items-center jusitfy-center flex-col my-12",
  smallHeading: " text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 ",
  productsContainer:
    "flex flex-wrap w-[99%] md:w-[95%] lg:w-[70%] gap-2 md:gap-8 mx-auto justify-around sm:justify-center",
};

const FeaturedProducts = ({ data }) => {
  const [product, setProduct] = useState([]);
  // sending the request to get the data from the server of sanity
  useEffect(() => {
    const getData = async () => {
      const p = await client.fetch(`*[_type == "featuredProduct"]`);
      setProduct(p);
    };
    getData();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.headingContainer}>
        <h2
          className={style.smallHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          Featured Products
        </h2>
        <MdOutlineFeaturedPlayList className="text-3xl " />
      </div>

      <div className={style.productsContainer}>
        {product &&
          product.map((item) => <SingleProduct item={item} key={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { urlForThumbnail } from "../../pages/api/image";
import useWindowSize from "../../hooks/windowSize";
import NextLink from "next/link";

const SingleProduct = ({ item }) => {
  const { width } = useWindowSize();
  const style = {
    wrapper: "px-2 md:px-4 py-4 md:py-4 bg-white flex flex-col items-start ",
    img: "mb-4",
    name: "font-semibold my-2 md:my-3 text-xs md:text-lg",
    price: "my-1 md:my-3 text-xs md:text-lg",
    buttonContainer:
      " transition-all duration-[350ms] cursor-pointer flex items-center justify-center bg-[#c8a165] hover:bg-opacity-[0.8] px-2 md:px-8 py-1 md:py-3 max-w-fit md:max-w-none md:w-[100%]",
    btn: "flex-1 tracking-wide text-stone-100 text-xs md:text-sm",
    hoverButton: "font-bold px-3 py-6 bg-[#c8a165] rounded-full cursor-pointer",
  };
  return (
    <NextLink href={`/${item.slug.current}`} passHref>
      <div className={style.wrapper} style={{ fontFamily: "Lato, sans-serif" }}>
        <div className="content">
          <div class="content-overlay"></div>
          <div className="content-image">
            <img
              src={`${urlForThumbnail(item.image)}`}
              alt="Image for product"
              width={`${width < 700 ? 140 : 230}`}
              height={`${width < 700 ? 140 : 230}`}
            />
          </div>
          <div class="content-details fadeIn-bottom fadeIn-right">
            <h3 className={style.hoverButton}>VIEW</h3>
          </div>
        </div>
        <h2 className={style.name}>{item.name.toUpperCase()}</h2>
        <h2 className={style.price}>Rs.{item.price}</h2>
        <div className={style.buttonContainer}>
          <button className={style.btn}>View Details</button>
          <AiOutlineShoppingCart className="text-lg text-white mx-3" />
        </div>
      </div>
    </NextLink>
  );
};

export default SingleProduct;

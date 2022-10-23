import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { urlForThumbnail } from "../../pages/api/image";
import useWindowSize from "../../hooks/windowSize";
import NextLink from "next/link";

const SingleProduct = ({ item }) => {
  const { width } = useWindowSize();
  const style = {
    wrapper:
      "px-2 md:px-4 py-4 md:py-4 bg-white flex flex-col items-start w-[80%] md:w-[20%]",
    img: "mb-4",
    name: "font-semibold my-2 md:my-3 text-lg md:text-lg text-green-900 mx-auto text-center md:text-left h-[20%] flex items-center justify-center  ",
    price: `font-bold my-1 md:my-3 text-sm md:text-lg text-green-900 ${
      item.discount && "line-through"
    }`,
    buttonContainer:
      "mx-auto transition-all duration-[350ms] cursor-pointer flex items-center justify-center bg-green-700 hover:bg-opacity-[0.8] px-2 md:px-8 py-3 md:py-3  w-[100%] md:max-w-none md:w-[100%]",
    btn: "flex-1 tracking-wide text-white text-xs md:text-sm",
    hoverButton:
      "font-bold px-3 py-6 bg-green-700 rounded-full cursor-pointer text-white",
    discoutnedPrice:
      "my-1 md:my-3 text-2xl md:text-lg text-green-900 ml-4 font-bold",
    freeDelivery: "text-white text-center mx-auto bg-green-700 px-5 py-0 md:py-1",
  };
  return (
    <NextLink href={`/${item.slug.current}`} passHref>
      <div className={style.wrapper} style={{ fontFamily: "Lato, sans-serif" }}>
        <div className="content">
          <div class="content-overlay"></div>

          <div className="content-image">
            <img
              src={`${urlForThumbnail(item.images[0])}`}
              alt="Image for product"
              width={`${width < 700 ? 270 : 230}`}
              height={`${width < 700 ? 140 : 230}`}
            />
          </div>
          <div class="content-details fadeIn-bottom fadeIn-right">
            <h3 className={style.hoverButton}>VIEW</h3>
          </div>
        </div>
        <h2 className={style.name}>{item.name.toUpperCase()}</h2>
        {item.discount
          ? (item.price - (item.price * item.discount) / 100).toFixed(0) >
              1999 && <div className={style.freeDelivery}>Free Delivery</div>
          : item.price > 1999 && (
              <div className={style.freeDelivery}>Free Delivery</div>
            )}
        {/* adding the discounted price */}
        <div className="flex items-center justify-center mx-auto my-1 md:mx-0">
          <h2 className={style.price}>Rs.{item.price}</h2>
          {item.discount && (
            <h2 className={style.discoutnedPrice}>
              Rs.{(item.price - (item.price * item.discount) / 100).toFixed(0)}
            </h2>
          )}
        </div>
        {/* adding the discount value */}
        {item.discount && (
          <div className="flex items-center justify-center mx-auto md:mx-0 my-0 border-[2px] border-green-800 w-[100%] mb-2">
            <h1 className="text-sm font-bold text-green-900">
              {item.discount}% off
            </h1>
          </div>
        )}

        <div className={style.buttonContainer}>
          <button className={style.btn}>View Details</button>
          <AiOutlineShoppingCart className="mx-3 text-lg text-white" />
        </div>
      </div>
    </NextLink>
  );
};

export default SingleProduct;

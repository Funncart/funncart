import React, { useState } from "react";
import Header from "../Header/Header";
import { urlForThumbnail } from "../../pages/api/image";
import MoreDetails from "./MoreDetails/MoreDetails";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ItemCount from "./ItemCount";

// import Color from "./Color";
import Size from "./Size";
const ProductDetails = ({
  productName,
  price,
  description,
  information,
  reviews,
  slugValue,
  image,
  rating,
}) => {
  const style = {
    wrapper:
      "w-[95%] md:w-[80%] lg:w-[65%] mx-auto py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col",
    detailsContainer:
      "px-5 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-12 bg-white flex flex-col md:flex-row",
    imageContainer: "w-[100%] md:w-[40%]",
    contentContainer: "w-[100%] md:w-[60%] flex flex-col",
    header1: "flex items-center justify-center mt-4",
    name: "text-2xl md:text-3xl font-semibold text-stone-700 flex-1",
    priceText: "text-[#c8a165] font-bold text-xl md:text-2xl my-3",
    description: "text-sm text-stone-500",
    btn: "hover:bg-opacity-[0.9] transition duration-[200ms] my-6 bg-[#c8a165] max-w-fit px-8 md:px-12 py-2 md:py-3 text-white font-bold tracking-wide mx-auto md:mx-0",
    ratings: "text-xs text-stone-500",
  };
  const [RatingValue, setRatingValue] = useState("0");
  const [SizeValue, setSizeValue] = useState("M");
  const [ItemCounts, setItemCounts] = useState(1);
  const [IsAdded, setIsAdded] = useState(false);
  const handleGetSize = (size) => {
    setSizeValue(size);
  };
  const handleGetItemCount = (itemCount) => {
    setItemCounts(itemCount);
  };
  const handleAddToCart = () => {
    if (typeof window !== "undefined") {
      let data = JSON.parse(localStorage.getItem("cart"));
      if (!data) {
        data = [];
      }
      let existingCartItemIndex;
      let existingCartItem;
      let updatedItems;
      if (data) {
        existingCartItemIndex = data.findIndex(
          (item) => item.slug === slugValue
        );
        existingCartItem = data[existingCartItemIndex];
      }
      if (existingCartItem) {
        const newUpdatedItem = {
          ...existingCartItem,
          quantity:
            existingCartItem.quantity + ItemCounts <= 3
              ? existingCartItem.quantity + ItemCounts
              : existingCartItem.quantity,
        };
        updatedItems = [...data];
        updatedItems[existingCartItemIndex] = newUpdatedItem;
      } else {
        updatedItems = data.concat({
          name: productName,
          price: price,
          quantity: ItemCounts,
          image: urlForThumbnail(image),
          total: price * ItemCounts,
          slug: slugValue,
        });
      }
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 3500);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    }
  };

  let average = 0;
  let sum = 0;
  if (rating) {
    for (let r of rating) {
      sum += +r;
    }
    average = (sum / rating.length).toFixed(1);
  }

  return (
    <div className="" style={{ fontFamily: "Lato,sans-serif" }}>
      <Header headingText={`${productName}`} />
      <div className={style.wrapper}>
        {/* adding the single product details */}
        <div className={style.detailsContainer}>
          {/* image side of container */}
          <div className={style.imageContainer}>
            <Image src={`${urlForThumbnail(image)}`} height={400} width={350} />
          </div>
          {/* content side of the container */}
          <div className={style.contentContainer}>
            {IsAdded ? (
              <p className="bg-green-500 px-4 py-2 text-white rounded max-w-fit my-2">
                Successfully added to cart
              </p>
            ) : (
              <p className=" px-4 py-1 text-white rounded max-w-fit my-1">
                {" "}
                Successfully added to cart
              </p>
            )}
            <div className={style.header1}>
              <h2 className={style.name}>{productName}</h2>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={average}
                  precision={0.5}
                  size={"small"}
                  readOnly
                />
                <p className={style.ratings}>
                  ({rating && rating.length} Ratings)
                </p>
              </Box>
            </div>
            <p className={style.priceText}>Rs. {price}</p>
            <p className={style.description}>{description}</p>
            {/* <Color /> */}
            <Size size={handleGetSize} />
            <ItemCount itemCount={handleGetItemCount} />
            <button className={style.btn} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <div className={style.refImageContainer}>
              {/* <Image src={''} height={} width={}/>
            <Image src={''} height={} width={}/>
            <Image src={''} height={} width={}/> */}
            </div>
          </div>
        </div>

        {/* ADDING THE MORE DETAILS OF THE PRODUCT OPTION */}
        <MoreDetails
          description={description}
          information={information}
          reviews={reviews}
          productName={productName}
          slug={slugValue}
        />
      </div>
    </div>
  );
};

export default ProductDetails;

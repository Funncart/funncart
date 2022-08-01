import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MoreDetails from "./MoreDetails/MoreDetails";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ItemCount from "./ItemCount";
// import Color from "./Color";
import Size from "./Size";
const ProductDetails = ({
  productName,
  price = 2599,
  description,
  information,
  reviews,
}) => {
  information = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium. Distinctio, consequuntur. Vitae delectus modi saepe ratione. Necessitatibus, dolor perferendis? Atque, libero. Non minus odit, beatae blanditiis excepturi repudiandae incidunt.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium. Distinctio, consequuntur. Vitae delectus modi saepe ratione. Necessitatibus, dolor perferendis? Atque, libero. Non minus odit, beatae blanditiis excepturi repudiandae incidunt.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, accusantium. Distinctio, consequuntur. Vitae delectus modi saepe ratione. Necessitatibus, dolor perferendis? Atque, libero. Non minus odit, beatae blanditiis excepturi repudiandae incidunt.",
  ];
  productName = "Pottery Wase";
  description =
    "Lorem ipsum dolor sit\n amet consectetur, adipisicing elit. Voluptatibus ex laboriosam maiores iste, voluptates quisquam commodi, amet natus ea totam quae optio tempora aliquid nostrum voluptatem, placeat magni delectus sed.";
  reviews = [
    {
      author: "Aplha Beta",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ex laboriosam maiores iste, voluptates quisquam commodi, amet natus ea totam quae optio tempora aliquid nostrum voluptatem, placeat magni delectus sed.",
      date: "12/12/2000",
    },
    {
      author: "Aplha Gamma",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vtem, placeat magni delectus sed.",
      date: "12/12/2001",
    },
  ];

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
  const [SizeValue, setSizeValue] = useState("");
  const [ItemCounts, setItemCounts] = useState("");
  const handleGetSize = (size) => {
    setSizeValue(size);
  };
  const handleGetItemCount = (itemCount) => {
    setItemCounts(itemCount);
  };
  const handleAddToCard = (value) => {
    // have the value of size and item count
  };
  useEffect(() => {
    // CALCULATE THE AVERAGE OF ALL THE RATINGS GIVEN TO THE SYSTEM
    setRatingValue("3.5");
  }, []);

  return (
    <div className="" style={{ fontFamily: "Lato,sans-serif" }}>
      <Header headingText={`${productName}`} />
      <div className={style.wrapper}>
        {/* adding the single product details */}
        <div className={style.detailsContainer}>
          {/* image side of container */}
          <div className={style.imageContainer}>
            <Image src={"/img/chair.png"} height={400} width={350} />
          </div>
          {/* content side of the container */}
          <div className={style.contentContainer}>
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
                  value={RatingValue}
                  precision={0.5}
                  size={"small"}
                  readOnly
               />
                <p className={style.ratings}>({2} Ratings)</p>
              </Box>
            </div>
            <p className={style.priceText}>Rs. {price}</p>
            <p className={style.description}>{description}</p>
            {/* <Color /> */}
            <Size size={handleGetSize} />
            <ItemCount itemCount={handleGetItemCount} />
            <button className={style.btn} onClick={handleAddToCard}>
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
        />
      </div>
    </div>
  );
};

export default ProductDetails;

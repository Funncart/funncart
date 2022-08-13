import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { urlForThumbnail } from "../../pages/api/image";
import MoreDetails from "./MoreDetails/MoreDetails";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ItemCount from "./ItemCount";
import Animator from "../../components/UI/Animator";
import Color from "./Color";
import Size from "./Size";
import CustomCategory from "./CustomCategory";
const ProductDetails = ({
  productName,
  price,
  description,
  information,
  reviews,
  slugValue,
  image,
  rating,
  size, //it is a boolean
  color,
  categoryMainTitle,
  customCategoryData,
  categoryMainTitle1,
  customCategoryData1,
}) => {
  const style = {
    wrapper:
      "w-[95%] md:w-[80%] lg:w-[65%] mx-auto py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col",
    detailsContainer:
      "px-5 sm:px-6 md:px-8 lg:px-12  py-5 sm:py-6 md:py-8 lg:py-12 bg-white flex flex-col md:flex-row items-center",
    imageContainer: " md:mr-12 overflow-hidden flex items-center justify-center",
    contentContainer: "w-[100%] md:w-[60%] flex flex-col",
    header1: "flex items-center justify-center mt-4",
    name: "text-2xl md:text-3xl font-semibold text-green-700 flex-1",
    priceText: "text-green-800 font-bold text-xl md:text-2xl my-3",
    description: "text-sm text-green-900",
    btn: "hover:bg-opacity-[0.9] transition duration-[200ms] my-6 bg-green-700 max-w-fit px-8 md:px-12 py-2 md:py-3 text-white font-bold tracking-wide mx-auto md:mx-0",
    ratings: "text-xs text-stone-500",
  };
  const [RatingValue, setRatingValue] = useState("0");
  const [PriceValue, setPriceValue] = useState(price);
  const [SizeValue, setSizeValue] = useState("M");
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [SelectedCategory1, setSelectedCategory1] = useState("");
  const [ColorValue, setColorValue] = useState("#000000");
  const [ItemCounts, setItemCounts] = useState(1);
  const [IsAdded, setIsAdded] = useState(false);
  const handleGetSize = (size) => {
    setSizeValue(size);
  };
  const handleGetColor = (color) => {
    setColorValue(color);
  };
  const handleGetItemCount = (itemCount) => {
    setItemCounts(itemCount);
  };
  const handleSelectedCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  const handleSelectedCategory1 = (selectedCategory) => {
    setSelectedCategory1(selectedCategory);
  };
  // setting the condition for custom category
  useEffect(() => {
    if (SelectedCategory && SelectedCategory.length > 0) {
      setPriceValue(SelectedCategory[0].categoryPrice);
    }
  }, [SelectedCategory]);
  useEffect(() => {
    if (SelectedCategory1 && SelectedCategory1.length > 0) {
      setPriceValue(SelectedCategory1[0].categoryPrice);
    }
  }, [SelectedCategory1]);
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
          price: PriceValue,
          quantity: ItemCounts,
          image: urlForThumbnail(image),
          total: PriceValue * ItemCounts,
          slug: slugValue,
          size: SizeValue,
          color: ColorValue,
          category: SelectedCategory,
          category1: SelectedCategory1,
          categoryMainTitle: categoryMainTitle && categoryMainTitle,
          categoryMainTitle1: categoryMainTitle1 && categoryMainTitle1,
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
    <Animator>
      <div className="" style={{ fontFamily: "Lato,sans-serif" }}>
        <Header headingText={`${productName}`} />
        <div className={style.wrapper}>
          {/* adding the single product details */}
          <div className={style.detailsContainer}>
            {/* image side of container */}
            <div className={style.imageContainer}>
              <div className="hover:scale-[1.2] transition duration-[800ms] overflow-hidden">
                <Image
                  src={`${urlForThumbnail(image)}`}
                  height={190}
                  width={280}
                  // className="hover:scale-[1.5] transition duration-[800ms] overflow-"
                />
              </div>
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
              <p className={style.priceText}>Rs. {PriceValue}</p>
              <p className={style.description}>{description}</p>
              <Color color={color} getColor={handleGetColor} />
              {/* <Size size={handleGetSize} show={size} /> */}

              <CustomCategory
                customCategoryData={customCategoryData}
                categoryMainTitle={categoryMainTitle}
                selectedCategory={handleSelectedCategory}
              />
              <CustomCategory
                customCategoryData={customCategoryData1}
                categoryMainTitle={categoryMainTitle1}
                selectedCategory={handleSelectedCategory1}
              />
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
    </Animator>
  );
};

export default ProductDetails;

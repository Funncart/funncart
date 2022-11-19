import React, { useState } from "react";
import Description from "./Description";
import Information from "./Information";
import Review from "./Review";

const MoreDetails = ({
  reviews,
  description,
  information,
  productName,
  slug,
}) => {
  const [WhichNav, setWhichNav] = useState("information");
  const handleNavClick = (value) => {
    setWhichNav(value);
  };
  const style = {
    wrapper: "py-12 sm:py-16 md:py-12 lg:py-32 ",
    navContainer: "flex justify-between bg-white px-1 sm:px-6 md:px-8 lg:px-12",
    button1: `w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "information"
        ? "bg-green-700 text-gray-50"
        : "bg-[#ffffff] text-stone-600"
    }   px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
    button2: `w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "reviews"
        ? "bg-green-700 text-gray-50"
        : "bg-[#ffffff] text-stone-600"
    }    px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
    button3: `w-[50%] md:w-[50%] text-center hover:bg-opacity-[0.9] transition duration-[200ms] ${
      WhichNav == "description"
        ? "bg-green-700 text-gray-50"
        : "bg-[#ffffff] text-stone-600"
    }    px-4 sm:px-16 md:px-24 lg:px-36 py-2 md:py-4 lg:px-32 text-lg cursor-pointer my-7 md:my-6`,
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      {/* ADDING THE NAVIAGATION  */}
      <div className={style.navContainer}>
        <p
          className={style.button1}
          onClick={() => handleNavClick("information")}
        >
          Information
        </p>
        <p className={style.button2} onClick={() => handleNavClick("reviews")}>
          Reviews
        </p>
        <p
          className={style.button3}
          onClick={() => handleNavClick("description")}
        >
          Description
        </p>
      </div>
      {/* adding the content */}
      {/* ADDING THE DESCRIPTION */}
      {WhichNav == "description" && (
        <Description description={description} productName={productName} />
      )}
      {WhichNav == "information" && (
        <Information information={information} productName={productName} />
      )}
      {WhichNav == "reviews" && (
        <Review reviews={reviews} productName={productName} slug={slug} />
      )}
    </div>
  );
};

export default MoreDetails;

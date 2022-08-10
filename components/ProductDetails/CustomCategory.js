import React, { useState, useEffect } from "react";

const CustomCategory = (props) => {
  const style = {
    wrapper: ` px-2 flex items-center mt-9 md:mt-7 ${
      props.categoryMainTitle
        ? ""
        : "cursor-not-allowed px-2 max-w-fit opacity-[0.2]"
    }`,
    para: `text-stone-700 text-md font-bold `,
    sizeContainer: "flex ml-6",
  };
  const [SelectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (data) => {
    setSelectedCategory(data);
  };
  useEffect(() => {
    let result =
      props.customCategoryData &&
      props.customCategoryData.filter((obj) => {
        return obj.categoryTitle == SelectedCategory;
      });
    props.selectedCategory(result);
  }, [SelectedCategory]);
  console.log(props.customCategoryData)
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <p className={style.para}>{props.categoryMainTitle}</p>
      <div className={style.sizeContainer}>
        {props.customCategoryData &&
          props.customCategoryData.map((singleCategory) => {
            return (
              <p
                className={`${
                  singleCategory.categoryTitle == SelectedCategory
                    ? "bg-[#c8a165] text-white"
                    : "text-stone-600 "
                } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] ${
                  props.categoryMainTitle ? "" : "cursor-not-allowed "
                }`}
                onClick={() =>
                  handleCategoryClick(singleCategory.categoryTitle)
                }
              >
                {singleCategory.categoryTitle}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default CustomCategory;

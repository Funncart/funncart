import React, { useState, useEffect } from "react";

const Color = (props) => {
  const [Color, setColor] = useState(
    props.categoryColors
      ? props.categoryColors[0]
      : props.color && props.color[0]
  );
  const style = {
    wrapper: `mx-2 flex items-center mt-4 ${
      props.color && props.color.length > 0
        ? ""
        : "cursor-not-allowed px-2 max-w-fit opacity-[0.2] hidden"
    }`,
    heading: `text-green-800 text-md font-bold `,
    sizeContainer: "flex ml-6",
  };

  // color is an array of colors with hex codes
  const handleClick = (color) => {
    setColor(color);
  };
  useEffect(() => {
    props.getColor(Color);
  }, [Color]);
  console.log(Color);
  return (
    <div className={style.wrapper}>
      <p className={style.heading}>Color</p>
      <div className={style.sizeContainer}>
        {props.categoryColors && props.categoryColors.length > 1
          ? props.categoryColors.map((i) => {
              return (
                <div
                  className={`h-[2vh] w-[5vw] md:w-[1.2vw] mx-2 ${
                    Color == i &&
                    "border-2  p-2 scale-[1.2] ring-2 ring-green-700"
                  }`}
                  style={{ backgroundColor: i }}
                  onClick={() => handleClick(i)}
                ></div>
              );
            })
          : props.color &&
            props.color.map((i) => {
              return (
                <div
                  className={`h-[2vh] w-[5vw] md:w-[1.2vw] mx-2 ${
                    Color == i &&
                    "border-2  p-2 scale-[1.2] ring-2 ring-green-700"
                  }`}
                  style={{ backgroundColor: i }}
                  onClick={() => handleClick(i)}
                ></div>
              );
            })}
      </div>
    </div>
  );
};

export default Color;

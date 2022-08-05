import React, { useState } from "react";

const Color = (props) => {
  const [Color, setColor] = useState("");
  const style = {
    wrapper: `flex items-center mt-4 ${
      props.color && props.color.length > 0
        ? ""
        : "cursor-not-allowed px-2 max-w-fit opacity-[0.2] hidden"
    }`,
    heading: `text-stone-700 text-md font-bold `,
    sizeContainer: "flex ml-6",
  };

  // color is an array of colors with hex codes
  const handleClick = (color) => {
    setColor(color);
  };
  props.getColor(Color);
  console.log(Color);
  return (
    <div className={style.wrapper}>
      <p className={style.heading}>Color</p>
      <div className={style.sizeContainer}>
        {props.color &&
          props.color.map((i) => {
            return (
              <div
                className={`h-[2vh] w-[5vw] md:w-[1.2vw] mx-2 ${
                  Color == i &&
                  "border-2  p-2 scale-[1.2] ring-2 ring-[#c8a165]"
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

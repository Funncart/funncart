import React, { useState } from "react";

const style = {
  wrapper: "flex items-center mt-9 md:mt-7 ",
  para: "text-stone-700 text-md font-bold ",
  sizeContainer: "flex ml-6",
};

const Size = (props) => {
  const [Size, setSize] = useState("M");
  const handleSizeClick = (size) => {
    setSize(size);
  };
  props.size(Size);
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <p className={style.para}>Size</p>
      <div className={style.sizeContainer}>
        <p
          className={`${
            Size == "S" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
          onClick={() => handleSizeClick("S")}
        >
          S
        </p>
        <p
          className={`${
            Size == "M" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
          onClick={() => handleSizeClick("M")}
        >
          M
        </p>
        <p
          className={`${
            Size == "L" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
          onClick={() => handleSizeClick("L")}
        >
          L
        </p>
        <p
          className={`${
            Size == "XL" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
          onClick={() => handleSizeClick("XL")}
        >
          XL
        </p>
      </div>
    </div>
  );
};

export default Size;

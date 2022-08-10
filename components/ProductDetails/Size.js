import React, { useState } from "react";

const Size = (props) => {
  const style = {
    wrapper: `flex items-center mt-9 md:mt-7 ${
      props.show ? "" : "cursor-not-allowed px-2 max-w-fit opacity-[0.2]"
    }`,
    para: `text-stone-700 text-md font-bold `,
    sizeContainer: "flex ml-6",
  };
  const [Size, setSize] = useState(props.show ? "M" : "");
  const handleSizeClick = (size) => {
    if (props.show) {
      setSize(size);
      props.size(Size);
    }
    props.size(Size);
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <p className={style.para}>Size</p>
      <div className={style.sizeContainer}>
        <p
          className={`${
            Size == "S" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] ${
            props.show ? "" : "cursor-not-allowed "
          }`}
          onClick={() => handleSizeClick("S")}
        >
          S
        </p>
        <p
          className={`${
            Size == "M" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] ${
            props.show ? "" : "cursor-not-allowed "
          }`}
          onClick={() => handleSizeClick("M")}
        >
          M
        </p>
        <p
          className={`${
            Size == "L" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] ${
            props.show ? "" : "cursor-not-allowed "
          }`}
          onClick={() => handleSizeClick("L")}
        >
          L
        </p>
        <p
          className={`${
            Size == "XL" ? "bg-[#c8a165] text-white" : "text-stone-600 "
          } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] ${
            props.show ? "" : "cursor-not-allowed "
          }`}
          onClick={() => handleSizeClick("XL")}
        >
          XL
        </p>
      </div>
    </div>
  );
};

export default Size;

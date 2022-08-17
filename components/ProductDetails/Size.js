import React, { useState, useEffect } from "react";

const Size = (props) => {
  // props.categoryData WILL CONTAIN THE ARRAY OF OBJECTS
  const style = {
    wrapper: `flex items-center mt-9 md:mt-9 ${"px-2 max-w-fit "}`,
    para: `text-green-800 text-md font-bold `,
    sizeContainer: "flex ml-6",
  };
  const [Size, setSize] = useState(
    props.categoryData
      ? props.categoryData[0].categorySizeTitle
      : props.sizeData && props.sizeData[0].singleSize
  );
  const [Price, setPrice] = useState("");
  // color is an array of colors with hex codes
  const handleClick = (arr) => {
    setSize(arr[0]);
    setPrice(arr[1]);
  };
  useEffect(() => {
    props.getSize(Size);
    props.getPrice(Price);
  }, [Size]);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      {(props.categoryData || props.sizeData) && (
        <p className={style.para}>Size</p>
      )}
      <div className={style.sizeContainer}>
        {props.categoryData && props.categoryData.length > 0
          ? props.categoryData.map((i) => {
              return (
                <p
                  className={`${
                    Size == i.categorySizeTitle &&
                    "flex items-center justify-center bg-green-700 text-white "
                  } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] text-green-800`}
                  onClick={() =>
                    handleClick([i.categorySizeTitle, i.categorySizePrice])
                  }
                >
                  {i.categorySizeTitle}
                </p>
              );
            })
          : props.sizeData &&
            // props.sizeData.length > 0 &&
            props.sizeData.map((i) => {
              return (
                <p
                  className={`${
                    Size == i.singleSize &&
                    "flex items-center justify-center bg-green-700 text-white "
                  } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%] text-green-800`}
                  onClick={() => handleClick([i.singleSize, i.singlePrice])}
                >
                  {i.singleSize}
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default Size;

// props.color &&
//       props.color.map((i) => {
//         return (
//           <p
//             className={`${
//               Size == "S" &&
//               "flex items-center justify-center bg-green-700 text-white "
//             } mx-4 px-4 py-2 w-[30%] cursor-pointer w-[50%]`}
//             onClick={() => handleClick()}
//           ></p>
//         );
//       }

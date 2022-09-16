import React from "react";
import Animator from "../../components/UI/Animator";
import Header from "../../components/Header/Header1";
import SellerForm from "../../components/Seller/SellerForm";
const style = {
  wrapper: "",
  sellerTextContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
  sellerHeading:
    "border-b-2 border-green-900 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-green-900 my-8 md:my-10",
  sellerPara: "text-green-900 py-2 md:py-3 px-4 md:px-6",
  sellerFormContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
};
const index = () => {
  return (
    <Animator>
      <Header headingText={"Become a seller"} />
      <div className={style.sellerTextContainer}>
        <h2
          className={style.sellerHeading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          About becoming a seller
        </h2>
        <p
          className={style.sellerPara}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi aliquid quis similique nihil. Repellendus nihil sequi beatae,
          ipsam adipisci rerum numquam molestias, laboriosam fuga modi nesciunt
          laborum voluptatibus quaerat.
        </p>
        <p
          className={style.sellerPara}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi aliquid quis similique nihil. Repellendus nihil sequi beatae,
          ipsam adipisci rerum numquam molestias, laboriosam fuga modi nesciunt
          laborum voluptatibus quaerat.
        </p>
      </div>
      {/* adding the seller form */}
      <div className={style.sellerFormContainer}>
        <SellerForm />
      </div>
    </Animator>
  );
};

export default index;

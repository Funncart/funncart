import React from "react";
import Animator from "../../components/UI/Animator";
import Header from "../../components/Header/Header1";
import SellerForm from "../../components/Seller/SellerForm";
const style = {
  wrapper: "",
  sellerTextContainer: "",
  sellerHeading: "",
  sellerPara: "",
  sellerFormContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-16",
};
const index = () => {
  return (
    <Animator>
      <Header headingText={"Become a seller"} />
      <div className={style.sellerTextContainer}>
        <h2 className={style.sellerHeading}>About becoming a seller</h2>
        <p className={style.sellerPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eligendi aliquid quis similique nihil. Repellendus nihil sequi beatae,
          ipsam adipisci rerum numquam molestias, laboriosam fuga modi nesciunt
          laborum voluptatibus quaerat.
        </p>
        <p className={style.sellerPara}>
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

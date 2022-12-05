import React from "react";
import Image from "next/image";
import Link from "next/link";
import Signature from "./Signature";
const style = {
  wrapper: "ml-0 bg-primary",
  footerNav: "flex flex-col md:flex-row mt-2 md:mt-8 w-[100%] pt-12 md:py-24 ",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  left: "flex flex-col items-center md:items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-start md:justify-center",
  col1: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  col2: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  list: "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1",
  list1:
    "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1 ",
};
const Footer = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <div className={style.footerNav}>
        {/* left side of the footer */}
        <div className={style.left}>
          {/* <Image width={190} height={190} src="/logo.png" /> */}
          <h2 className="text-white text-5xl">LOGO HERE</h2>
          {/* adding the play store and apps store buttons */}
          <div className={style.btnContainer}></div>
        </div>
        <div className={style.right}>
          <div className={style.col1}>
            <Link href="/">
              <li className={style.list}>HOME</li>
            </Link>
            <Link href="/products">
              <li className={style.list}>PRODUCTS</li>
            </Link>
            <Link href="/about">
              <li className={style.list}>ABOUT US</li>
            </Link>
          </div>
          <div className={style.col2}>
            <Link href="/contact">
              <li className={style.list1}>HELP</li>
            </Link>
            <Link href="/contact">
              <li className={style.list1}>CONTACT</li>
            </Link>
            <Link href="/seller">
              <li className={style.list1}>SELLER</li>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center justify-center">
        <p className="font text-white my-2">Sign up for newsletter</p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-7">
          <input type="text" className="px-4 md:px-6 py-2 md:py-2 w-[80vw] md:w-[15vw] outline-none my-3" placeholder="Email..." />
          <button className="bg-white text-primary px-4 md:px-6 py-2 md:py-2 mx-3 my-2 w-[100%] md:w-auto">SEND</button>
        </div>
      </div>
      {/* adding the signature */}
      <Signature />
    </div>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Features from "./Features/Features";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import ProductsButton from "./ProductsButton/ProductsButton";
import Image from "next/image";
import SuggestionsButton from "./SuggestionsButton";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-3xl md:text-7xl text-stone-600 my-6 md:my-8 w-full md:w-[60%] ",
  smallHeading: "text-2xl md:text-3xl text-stone-800",
  para: "text-stone-900 text-xl md:text-sm my-6 md:my-8",
  btn: "px-4 md:px-5 py-2 md:py-2 border-2 border-stone-800 transition duration-[300ms] hover:bg-stone-300 hover:scale-[0.95] max-w-fit mx-auto md:mx-0",
  right: "flex flex-col md:my-36 lg:my-36 px-4 mt-12 md:mt-2",
  main1: "flex items-center justify-center flex-col md:flex-row",
  left: "scale-[0.8]",
};
const variantsContainer = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: -100,
    transition: {
      delay: 0.2,
      duration: 0.7,
      when: "beforeChildren", // make this animation to end before children animation occurs
    },
  },
};
const Home = ({  }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.main1}>
        <div className={style.left}>
          <Image
            src="/img/home.webp"
            alt="image of the home "
            width={700}
            height={700}
          />
        </div>
        {/* right side */}
        <motion.div
          variants={variantsContainer}
          initial="hidden"
          animate="visible"
          className={style.right}
        >
          <h2
            className={style.smallHeading}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Welcome To Our Elegant
          </h2>
          <h2
            className={style.heading}
            style={{ fontFamily: "Yeseva One, cursive" }}
          >
            Ecommerce Shop
          </h2>
          <h2
            className={style.para}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our shop includes all kind of handcrafted products from your
            personal use to Gifts
          </h2>
          <Link href="/products">
            <button
              style={{ fontFamily: "Poppins, sans-serif" }}
              className={style.btn}
            >
              Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
      {/* adding the features */}
      <Features />
      {/* adding the featured products */}

      <FeaturedProducts />
      {/* adding the call to action to all products page */}
      <ProductsButton />
      <SuggestionsButton />
    </div>
  );
};

export default Home;

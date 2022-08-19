import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../hooks/windowSize";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Features from "./Features/Features";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import ProductsButton from "./ProductsButton/ProductsButton";
import Image from "next/image";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-3xl md:text-7xl text-green-700 my-2 md:my-8 w-full md:w-[60%] text-center md:text-left",
  heading1:
    "text-3xl md:text-5xl text-green-700 my-3 md:my-8 w-full md:w-[85%] text-center md:text-left",
  smallHeading: "text-2xl md:text-3xl text-green-800 text-center md:text-left",
  para: "text-green-900 text-xl md:text-sm my-3 md:my-8 text-center md:text-left",
  para1:
    "text-green-900 text-sm md:text-lg my-3 md:my-4 w-[70%] text-center md:text-left",
  para2:
    "text-green-900 text-sm md:text-lg my-3 md:mb-5 w-[70%] text-center md:text-left",
  para3:
    "text-green-900  my-4 md:mb-5 w-[70%] font-thin text-xs text-center md:text-left",
  btn: "px-4 md:px-5 py-2 md:py-2 border-2 border-green-700 transition duration-[300ms] hover:scale-[0.98] max-w-fit mx-auto md:mx-0 text-green-800",
  right:
    "flex flex-col my-0 md:my-36 lg:my-36 px-4 md:mt-12 md:mt-2 md:ml-12 items-center md:items-start",
  main1: "flex flex-col md:flex-row mx-auto w-[100%]",
  left: "flex items-center justify-center",
  left1: "flex items-center justify-center scale-[0.8]",
};
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";

const Home = ({}) => {
  const { width } = useWindowSize();
  return (
    <div className={style.wrapper}>
      {/* ------------------------------------------------ */}
      <div className="flex items-center justify-center mx-auto w-[100%] md:w-[80%] h-[100vh] md:h-auto">
        <Swiper
          // effect="fade"
          spaceBetween={0}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: width < 700 ? false : true }}
          autoplay={true}
          className="flex items-center justify-center mx-auto h-[100vh] md:h-auto"
        >
          <div className="h-[80vh] md:h-auto">
            <SwiperSlide>
              <div className={style.main1}>
                <div className={style.left}>
                  <Image
                    src="/img/home.webp"
                    alt="image of the home "
                    width={600}
                    height={600}
                  />
                </div>
                <div
                  // variants={variantsContainer}
                  // initial="hidden"
                  // animate="visible"
                  className={style.right}
                >
                  <h2
                    className={style.smallHeading}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Welcome To Our
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
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="h-[130vh] md:h-auto">
            <SwiperSlide>
              <div className={style.main1}>
                <div className={style.left1}>
                  <img
                    src="/pakistan.png"
                    alt="image of the home "
                    // width={300}
                    // height={400}
                  />
                </div>
                {/* right side */}
                <div
                  // variants={variantsContainer}
                  // initial="hidden"
                  // animate="visible"
                  className={style.right}
                >
                  <h2
                    className={style.smallHeading}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Welcome To Funncart
                  </h2>
                  <h2
                    className={style.heading1}
                    style={{ fontFamily: "Yeseva One, cursive" }}
                  >
                    We are a Marketplace for handcrafted products
                  </h2>
                  {/* <h2
                    className={style.para1}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Funncart connect costumers to workmanship of highly capable
                    crafters, where they can appreciate the art of handcrafted
                    items.
                  </h2> */}
                  <h2
                    className={style.para2}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    We are offering flat 20% discount on our Products. Use Promo
                    Code{" "}
                    <span className="px-2 md:px-4 py-1 md:py-2 bg-green-800 text-white text-md">
                      NEW20
                    </span>
                  </h2>
                  <h2
                    className={style.para3}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    *Offer valid from 14th August to 25 August
                  </h2>
                  <Link href="/products">
                    <button
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      className={style.btn}
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <div className="h-[130vh] md:h-auto flex items-center justify-center flex-col border-2">
              <SwiperSlide>
                <h2
                  className="text-4xl md:text-6xl text-green-800 text-center mt-24"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  What defines us?
                </h2>
                <h1
                  className="text-6xl md:text-8xl text-green-800 text-center my-7"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Competitive prices
                </h1>
                <h2
                  className="text-4xl md:text-6xl text-green-800 text-center my-7 w-[60%] mx-auto"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  and proudly promoting
                </h2>
                <h2
                  className="text-6xl md:text-8xl text-green-800 text-center my-7"
                  style={{ fontFamily: "Imperial Script, cursive" }}
                >
                  Made in Pakistan
                </h2>
                {/* <img src="/1.png" alt="" /> */}
                <div className="text-3xl md:text-4xl flex items-center justify-center md:justify-end">
                  <img src="/urdulogo.png" alt="logo for funncart" className="scale-[0.6]"/>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
      {/* ------------------------------------------------ */}
      {/* adding the features */}
      <Features />
      {/* adding the featured products */}
      <FeaturedProducts />
      {/* adding the call to action to all products page */}
      <ProductsButton />
      {/* <SuggestionsButton /> */}
    </div>
  );
};

export default Home;

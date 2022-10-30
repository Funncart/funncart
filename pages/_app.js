import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [Click, setClick] = useState(false);
  const handleClick = () => {
    setClick(false);
  };
  return (
    <>
      <Head>
        <title key={"title"}>
          Funncart | Market place for handcrafted products
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/urdulogo.png" type="image/x-icon" />
        <meta
          name="description"
          content="A marketplace for handmade products"
        />
      </Head>
      <div className="overflow-x-hidden bg-[#f6f6f6] z-0">
        <p className="py-1 text-xs text-center bg-green-800 text-[#d3d3d3]">
          FREE SHIPPING ON ALL ORDERS RS. 1999 & ABOVE
        </p>
        <Navbar click={Click} />
        <AnimatePresence exitBeforeEnter>
          <div key={asPath} className="z-0 mt-24 md:mt-2" onClick={handleClick}>
            <Component {...pageProps} />
          </div>
          <Footer />
          {/* adding the whatsapp button as CTA */}
          <a href="https://wa.me/+923343866227/?text=" className="fixed p-3 bg-green-800 rounded-full cursor-pointer fi bottom-4 right-4">
            <BsWhatsapp className="text-2xl text-[#d8ca75] md:text-2xl shake-y-animation"/>
          </a>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;

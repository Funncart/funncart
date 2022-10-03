import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
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
        <p className="bg-green-800 text-white text-center text-xs py-1">FREE SHIPPING ON ALL ORDERS RS. 1999 & ABOVE</p>
        <Navbar click={Click} />
        <AnimatePresence exitBeforeEnter>
          <div key={asPath} className="mt-24 md:mt-2 z-0" onClick={handleClick}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
import Head from "next/head";
import screenWidth from "../hooks/windowSize";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [Click, setClick] = useState(false);
  const handleClick = () => {
    setClick(false);
  };
  return (
    <>
      <Head>
        <title key={"title"}>Ecommerce Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A website restaurant for online presense"
        />
      </Head>
      <div className="overflow-x-hidden bg-[#f6f6f6] z-0">
        <Navbar click={Click} />
        <div className="mt-24 md:mt-2 z-0" onClick={handleClick}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

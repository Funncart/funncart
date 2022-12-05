import React from "react";
import styled from "styled-components";
import useWindowSize from "../../../hooks/windowSize";
const style = {
  wrapper: "flex items-end justify-start w-[100vw] md:w-[65vw] h-[70vh] md:h-[70vh] mx-auto flex-col md:p-16 my-24",
  heading: "font text-primary font-bold text-xl md:text-5xl w-[100%] md:w-[70%]  my-5 text-center md:text-end",
  para: "font text-primary font-bold text-2xl md:text-xl my-3 text-center md:text-end" ,
  btn: "font bg-primary text-white hover:opacity-[0.91] px-12 py-2 md:px-12 md:py-2 my-5 mx-auto md:mx-0 ",
};
const Info = () => {
  const { width } = useWindowSize();
  const InfoBackground = styled.div`
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),
      url(${width < 5000 && "/homebg.jpg"});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: auto;
  `;
  return (
    <InfoBackground className={style.wrapper}>
      <h2 className={style.heading}>A Marketplace for handcrafted products</h2>
      <p className={style.para}>Products promoted at lower prices are most likely fraudulant</p>
      <button className={style.btn}>SHOP NOW</button>
    </InfoBackground>
  );
};

export default Info;

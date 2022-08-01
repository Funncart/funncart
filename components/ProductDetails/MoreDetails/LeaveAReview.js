import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const style = {
  wrapper: "mt-12",
  heading: "text-2xl md:text-3xl text-stone-700 my-6 font-bold smallDivider",
  para: "text-stone-600 font-semibold text-xs",
  reviewContainer: "flex flex-col justify-start",
  input:
    "bg-[#f6f6f6] my-4 px-3 py-3 md:px-4 md:px-5 outline-none border-2 border-transparent focus:border-[#c8a165]",
    btn:'bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-red-400 max-w-fit px-8 md:px-12 py-2 md:py-3 text-stone-100 font-bold tracking-wide',

};
const LeaveAReview = () => {
  const [Review, setReview] = useState("");
  const [Name, setName] = useState("");
  const [RatingValue, setRatingValue] = useState("0");
  const handleNameChange = (e) => {
    setName(e.target.vallue);
  };
  const handleReviewChange = (e) => {
    setReview(e.target.vallue);
  };
  const submitReview = () => {
    // SEND THE REQUEST TO SANITY TO SAVE THE DATA IN THE DATABASE
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Lato,sans-serif" }}>
      <h2 className={style.heading}>Leave a Review</h2>
      {/* ADDING THE RATING COMPONENT */}
      <p className={style.para}>Your rating</p>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Rating
          name="simple-controlled"
          value={RatingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
          }}
          precision={0.5}
        />
      </Box>
      <form className={style.reviewContainer} onSubmit={submitReview}>
        <input
          type="text"
          className={style.input}
          value={Name}
          onChange={handleNameChange}
          placeholder="Name..."
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={handleReviewChange}
          value={Review}
          className={style.input}
          placeholder="Your Review..."
        ></textarea>
        <button className={style.btn}>Submit</button>
      </form>
    </div>
  );
};

export default LeaveAReview;

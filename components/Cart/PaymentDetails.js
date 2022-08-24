import React, { useState } from "react";

const style = {
  wrapper: "flex flex-col py-4",
  smallHeading:
    "border-b-2 border-green-900 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-green-900 ",
  btn: "bg-opacity-[1] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-green-800 mx-auto px-8 md:px-12 py-2 md:py-3 text-stone-50 font-bold tracking-wide",
  subtotal: " text-green-800 flex w-[75%] md:w-[50%] mx-auto my-6 ",
  para: "  flex-1",
  amount: "",
  orderTotal:
    "text-red-400 w-[75%] md:w-[50%] mx-auto my-6 font-normal flex border-t-[2px] border-green-900 py-3",
  input:
    "border-b-2 border-green-900 outline-none ring-none w-[30%] placeholder:text-xs",
  promoContainer:
    "flex items-center justify-between w-[75%] md:w-[50%] mx-auto my-6 text-black ",
};
const PaymentDetails = (props) => {
  const [Promo, setPromo] = useState("");
  const handlePromoChange = (e) => {
    setPromo(e.target.value);
  };
  const handleApplyPromo = () => {
    if (Promo === "NEW10") {
      if (props.total.toFixed(1) * 0.1 < 300) {
        props.handleTotal(10);
      } else {
        props.handleTotal(300);
      }
    }
    if (Promo === "NEW20") {
      if (props.total.toFixed(1) * 0.2 < 300) {
        props.handleTotal(20);
      } else {
        props.handleTotal(300);
      }
    }
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2
        className={style.smallHeading}
        style={{ fontFamily: "Yeseva One, cursive" }}
      >
        Payment Details
      </h2>
      <div
        className={style.subtotal}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p className={style.para}>Cart Subtotal </p>
        <p className={style.amount}>Rs. {Math.round(props.total)}</p>
      </div>
      <div className={style.subtotal}>
        <p className={style.para}>Shipping Fee</p>
        <p className={style.amount}>
          {props.total > 1000 ? "Free Delivery" : "+ Rs 150"}
        </p>
      </div>
      <form
        className={style.promoContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* <p className={style.para}>Promo Code</p> */}
        <input
          className={style.input}
          placeholder="Enter Code..."
          value={Promo}
          onChange={handlePromoChange}
        />
        <button
          onClick={handleApplyPromo}
          className="px-4 py-2 bg-green-800 bg-opacity-[1] hover:bg-opacity-[0.9] text-white text-xs"
        >
          ADD
        </button>
      </form>
      <div
        className={style.orderTotal}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p className={style.para}>Order Total </p>
        <p className={style.amount}>
          Rs.{" "}
          {props.total == 0
            ? 0
            : props.total > 0 && props.total < 1000
            ? Math.round(props.total + 150)
            : Math.round(props.total)}
        </p>
      </div>
      {props.DetailsError && (
        <p
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[75%] md:w-[50%] mx-auto bg-red-600 text-white px-3 py-1 tracking-wide rounded"
        >
          *Please fill billing details
        </p>
      )}

      <button className={style.btn} onClick={props.placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default PaymentDetails;

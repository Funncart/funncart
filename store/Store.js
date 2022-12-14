import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    // case "ADD_CART_ITEM": {
    //   const newItem = action.payload;
    //   const existItem = state.cart.cartItems.find(
    //     (item) => item._key === newItem._key
    //   );
    //   const cartItems = existItem
    //     ? state.cart.cartItems.map((item) =>
    //         item._key === existItem._key ? newItem : item
    //       )
    //     : [...state.cart.cartItems, newItem];
    //   Cookies.set("cartItems", JSON.stringify(cartItems));
    //   return { ...state, cart: { ...state.cart, cartItems } };
    // }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const value = { state, dispatch };
  // return <StoreProvider value={value}>{props.children}</StoreProvider>;
}

import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [footList, setFoodList] = useState(food_list);

  const [cartItems, setCartItems] = useState({});

  console.log(cartItems);

  const addToCart = (cartId) => {
    if (!cartItems[cartId]) {
      setCartItems((prev) => ({ ...prev, [cartId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [cartId]: prev[cartId] + 1 }));
    }
  };

  const removeToCart = (cartId) => {
    setCartItems((prev) => ({ ...prev, [cartId]: prev[cartId] - 1 }));
  };

  const value = { footList, cartItems, setCartItems, addToCart, removeToCart };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

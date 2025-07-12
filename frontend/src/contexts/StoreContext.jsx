import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();   

export const StoreContextProvider = ({ children }) => {
  const [footList, setFoodList] = useState(food_list);

  const [cartItems, setCartItems] = useState({});

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

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let foodInfo = food_list.find((product) => product._id === item);

        totalAmount += foodInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const value = {
    footList,
    cartItems,
    setCartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

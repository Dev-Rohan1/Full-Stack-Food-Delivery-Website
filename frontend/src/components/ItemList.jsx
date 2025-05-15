import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../contexts/StoreContext";

const ItemList = ({ foodData }) => {
  const { cartItems, setCartItems, addToCart, removeToCart } =
    useContext(StoreContext);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white flex flex-col h-full">
      {/* Image with cart controls overlay */}
      <div className="relative">
        <img
          className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover hover:opacity-90"
          src={foodData.image}
          alt={foodData.name}
        />

        {/* Cart controls */}
        <div className="absolute bottom-2 right-2 bg-white/90 rounded-full shadow-md p-1 flex items-center">
          {cartItems[foodData._id] === 0 || !cartItems[foodData._id] ? (
            <button
              onClick={() => addToCart(foodData._id)}
              className="p-1 hover:scale-110 transition-transform"
              aria-label="Add to cart"
            >
              <img src={assets.add_icon_green} alt="Add" className="w-6 h-6" />
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={() => removeToCart(foodData._id)}
                className="p-1 hover:scale-110 transition-transform"
                aria-label="Remove item"
              >
                <img
                  src={assets.remove_icon_red}
                  alt="Remove"
                  className="w-5 h-5"
                />
              </button>
              <span className="text-sm font-medium min-w-[20px] text-center">
                {cartItems[foodData._id]}
              </span>
              <button
                onClick={() => addToCart(foodData._id)}
                className="p-1 hover:scale-110 transition-transform"
                aria-label="Add more"
              >
                <img
                  src={assets.add_icon_green}
                  alt="Add"
                  className="w-5 h-5"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              {foodData.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {foodData.description}
            </p>
          </div>
          <img
            className="w-16 sm:w-20 ml-2"
            src={assets.rating_starts}
            alt={`Rating: ${foodData.rating || "0"}`}
          />
        </div>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-orange-500">
            ${foodData.price.toFixed(2)}
          </span>
          {cartItems[foodData._id] > 0 && (
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
              In cart: {cartItems[foodData._id]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;

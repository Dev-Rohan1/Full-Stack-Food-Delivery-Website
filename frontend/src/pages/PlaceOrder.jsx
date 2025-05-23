import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <section className="mt-10">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Delivery Information */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-5">Delivery Information</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="First name"
              />
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="Last name"
              />
            </div>
            <input
              className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
              type="text"
              placeholder="Street"
            />
            <div className="flex gap-3">
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="flex gap-3">
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="Zip code"
              />
              <input
                className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
                type="text"
                placeholder="Country"
              />
            </div>
            <input
              className="border border-gray-300 w-full h-[40px] rounded outline-0 px-3"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/2 sm:p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Order Summary
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm sm:text-base">
                Subtotal
              </span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm sm:text-base">
                Delivery fee
              </span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                ${deliveryFee.toFixed(2)}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-3 sm:pt-4 flex justify-between">
              <span className="text-base sm:text-lg font-semibold text-gray-900">
                Total
              </span>
              <span className="text-base sm:text-lg font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="mt-4 sm:mt-6 w-full bg-orange-500 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none transition-colors text-sm sm:text-base"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;

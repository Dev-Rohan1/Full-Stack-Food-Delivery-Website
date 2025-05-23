import React, { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { footList, cartItems, removeToCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Your Cart
        </h1>
        {/* Empty Cart State */}
        {Object.keys(cartItems).length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center mb-6">
            <div className="mx-auto h-20 w-20 sm:h-24 sm:w-24 text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg mb-8 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <div className="min-w-[600px] md:min-w-full">
                {" "}
                {/* Ensure table doesn't break on mobile */}
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-center text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {footList.map((item) => {
                      if (cartItems[item._id] > 0) {
                        return (
                          <tr
                            key={`${item._id}-${cartItems[item._id]}`}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md overflow-hidden border border-gray-200">
                                <img
                                  className="h-full w-full object-cover"
                                  src={item.image}
                                  alt={item.name}
                                  loading="lazy"
                                  width={64}
                                  height={64}
                                />
                              </div>
                            </td>
                            <td className="px-4 py-4 max-w-[150px] sm:max-w-none">
                              <div className="text-sm sm:text-base font-medium text-gray-900 truncate">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {item.category}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-900">
                              {item.price}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap flex items-center justify-center">
                              <span className="mx-2 text-sm sm:text-base text-gray-700 font-medium">
                                {cartItems[item._id]}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-center text-sm sm:text-base font-semibold text-gray-900">
                              ${cartItems[item._id] * item.price}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap flex items-center justify-center text-sm">
                              <button
                                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                onClick={() => removeToCart(item._id)}
                                aria-label={`Remove ${item.name} from cart`}
                              >
                                <img
                                  className="w-3.5 h-3.5"
                                  src={assets.cross_icon}
                                  alt=""
                                  aria-hidden="true"
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Cart Summary */}
        {Object.keys(cartItems).length !== 0 && (
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Promo Code Section - Improved responsiveness */}
            <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-lg lg:col-span-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Apply Promo Code
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-4 py-2 sm:py-3 focus:outline-none"
                  />
                  <button className="bg-orange-500 text-white px-4 py-2 sm:py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-orange-600  transition-colors whitespace-nowrap">
                    Apply Code
                  </button>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-xs sm:text-sm text-yellow-700">
                        Promo codes can be applied at checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Order Summary
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Subtotal
                  </span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    {getTotalCartAmount()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Delivery fee
                  </span>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    {getTotalCartAmount() === 0 ? `$0.00` : `$${2.0}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 sm:pt-4 flex justify-between">
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {getTotalCartAmount() === 0
                      ? `$${0.0}`
                      : getTotalCartAmount() + 2}
                  </span>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                className="mt-4 sm:mt-6 w-full bg-orange-500 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none transition-colors text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>
              <div className="mt-3 sm:mt-4 flex items-center justify-center">
                <span className="text-gray-500 mr-2 text-xs sm:text-sm">
                  or
                </span>
                <button className="text-orange-500 hover:text-orange-600 font-medium text-xs sm:text-sm">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

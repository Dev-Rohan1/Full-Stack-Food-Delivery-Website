import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = ({ setLoginState }) => {
  const [currentState, setCurrentState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(currentState ? "Signing up..." : "Logging in...");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-[2px] bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 pb-0">
          <h1 className="text-3xl font-semibold text-gray-700">
            {currentState ? "Signup" : "Login"}
          </h1>

          <button
            onClick={() => setLoginState(false)}
            className="hover:bg-gray-100 w-10 h-10 rounded flex items-center justify-center cursor-pointer"
          >
            <img
              src={assets.cross_icon}
              alt="Close login"
              className="w-4 h-4"
            />
          </button>
        </div>
 
        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          {currentState && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300"
          >
            {currentState ? "Sign up" : "Log in"}
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6 text-center">
          <p className="text-gray-600">
            {currentState
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() => setCurrentState(!currentState)}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {currentState ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

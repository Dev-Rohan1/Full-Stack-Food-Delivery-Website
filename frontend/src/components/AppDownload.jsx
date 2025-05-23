import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <section className="my-20" id="mobile-app">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
          For Better Experience Download{" "}
          <span className="text-red-500 whitespace-nowrap">Tomato App</span>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 mx-auto px-4 text-sm sm:text-base md:text-lg leading-snug">
          Enjoy faster ordering, personalized recommendations, and exclusive
          offers with our mobile app.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <a
            href="#"
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded-lg"
            aria-label="Download on Google Play"
          >
            <img
              src={assets.play_store}
              alt="Get on Google Play"
              className="h-12 sm:h-14 w-auto"
              loading="lazy"
            />
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded-lg"
            aria-label="Download on App Store"
          >
            <img
              src={assets.app_store}
              alt="Download on the App Store"
              className="h-12 sm:h-14 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

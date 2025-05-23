import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black/85 mt-16 text-white pt-12 pb-6" id="contact-us">
      <div className="w-[90%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo and Social Media */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={assets.logo}
                alt="Tomato Logo"
                className="w-32 h-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              dignissimos iure beatae quae quidem ducimus in veniam officiis
              distinctio. Animi?
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-75 transition-opacity duration-200"
              >
                <img
                  src={assets.facebook_icon}
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:opacity-75 transition-opacity duration-200"
              >
                <img
                  src={assets.twitter_icon}
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-75 transition-opacity duration-200"
              >
                <img
                  src={assets.linkedin_icon}
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Company</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Get in touch</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300 text-sm">
                  +1 (017) 123-45678
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300 text-sm">
                  contact@tomato.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Tomato.com. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

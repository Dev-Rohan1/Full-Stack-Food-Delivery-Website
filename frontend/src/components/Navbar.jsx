import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between py-4 border-b border-b-gray-200">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-[120px]" src={assets.logo} alt="Company Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {[
            { label: "Home", key: "home", id: "home" },
            { label: "Menu", key: "menu", id: "menu" },
            { label: "Mobile App", key: "mobile-app", id: "mobile-app" },
            { label: "Contact Us", key: "contact-us", id: "contact-us" },
          ].map(({ label, key, id }) => (
            <li
              key={key}
              onClick={() => {
                setMenu(key);
                setShowMobileMenu(false);
              }}
              className={`cursor-pointer hover:text-[tomato] transition-colors ${
                menu === key ? "font-medium text-[tomato]" : "text-gray-700"
              }`}
            >
              <Link to={`#${id}`}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 hover:text-[tomato] transition-colors">
              <img className="w-5" src={assets.search_icon} alt="Search" />
            </button>
            <button className="text-gray-700 hover:text-[tomato] transition-colors">
              <img className="w-5" src={assets.basket_icon} alt="Basket" />
            </button>
            <button className="bg-[tomato] text-white font-medium px-4 py-1 rounded-md hover:bg-[#ff6347] transition-colors">
              Login
            </button>
          </div>

          {/* Mobile menu button - now hidden when menu is open */}
          {!showMobileMenu && (
            <button
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden text-gray-700 hover:text-[tomato] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
            showMobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="fixed inset-0 backdrop-blur-[1px]"
            onClick={() => setShowMobileMenu(false)}
          ></div>
          <div className="relative h-full w-4/5 max-w-[300px] bg-white border-r border-r-gray-200">
            <div className="flex justify-between items-center px-4 py-[13px] border-b border-gray-200">
              <Link to="/" onClick={() => setShowMobileMenu(false)}>
                <img
                  className="w-[100px]"
                  src={assets.logo}
                  alt="Company Logo"
                />
              </Link>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="text-gray-700 hover:text-[tomato] p-1"
              >
                <X size={22} className="text-gray-700 cursor-pointer" />
              </button>
            </div>
            <ul className="flex flex-col p-4">
              {[
                { label: "Home", key: "home", id: "home" },
                { label: "Menu", key: "menu", id: "menu" },
                { label: "Mobile App", key: "mobile-app", id: "mobile-app" },
                { label: "Contact Us", key: "contact-us", id: "contact-us" },
              ].map(({ label, key, id }) => (
                <li
                  key={key}
                  onClick={() => {
                    setMenu(key);
                    setShowMobileMenu(false);
                  }}
                  className={`py-3 px-2 cursor-pointer hover:text-[tomato] transition-colors ${
                    menu === key ? "font-medium text-[tomato]" : "text-gray-700"
                  }`}
                >
                  <Link to={`#${id}`} className="block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <button className="text-gray-700 hover:text-[tomato] transition-colors">
                  <img className="w-5" src={assets.search_icon} alt="Search" />
                </button>
                <button className="text-gray-700 hover:text-[tomato] transition-colors">
                  <img className="w-5" src={assets.basket_icon} alt="Basket" />
                </button>
                <button className="bg-[tomato] text-white font-medium px-4 py-1 rounded-md hover:bg-[#ff6347] transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

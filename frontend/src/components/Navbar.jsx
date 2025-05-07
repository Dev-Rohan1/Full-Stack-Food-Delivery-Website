import { X, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", key: "home", id: "home" },
    { label: "Menu", key: "menu", id: "menu" },
    { label: "Mobile App", key: "mobile-app", id: "mobile-app" },
    { label: "Contact Us", key: "contact-us", id: "contact-us" },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between py-4 border-b border-b-gray-200">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-[120px]" src={assets.logo} alt="Company Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ label, key, id }) => (
            <li
              key={key}
              onClick={() => {
                setMenu(key);
                setShowMobileMenu(false);
              }}
              className={`cursor-pointer hover:text-[tomato] transition-colors ${
                menu === key
                  ? "font-medium text-[tomato] border-b-2 border-b-[tomato]"
                  : "text-gray-700"
              }`}
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions + Mobile Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Only Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-[tomato] transition-colors"
            >
              <img className="w-5" src={assets.search_icon} alt="Search" />
            </button>
            <button
              aria-label="Basket"
              className="text-gray-700 hover:text-[tomato] transition-colors relative"
            >
              <img className="w-5" src={assets.basket_icon} alt="Basket" />
              <span className="absolute top-[-6px] right-[-10px] bg-[tomato] text-white text-xs w-2 h-2 flex items-center justify-center rounded-full"></span>
            </button>
            <button className="bg-[tomato] text-white font-medium px-4 py-1 rounded hover:bg-[#ff6347] transition-colors cursor-pointer text-sm">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          {!showMobileMenu && (
            <button
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden text-gray-700 hover:text-[tomato] focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="cursor-pointer" />
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

          <div
            className="relative h-full w-4/5 max-w-[300px] bg-white border-r border-r-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
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
                aria-label="Close menu"
              >
                <X size={22} className="text-gray-700 cursor-pointer" />
              </button>
            </div>

            <ul className="flex flex-col p-4">
              {navItems.map(({ label, key, id }) => (
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
                  <a href={`#${id}`} className="block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <button
                  aria-label="Search"
                  className="text-gray-700 hover:text-[tomato] transition-colors"
                >
                  <img className="w-5" src={assets.search_icon} alt="Search" />
                </button>
                <button
                  aria-label="Basket"
                  className="text-gray-700 hover:text-[tomato] transition-colors"
                >
                  <img className="w-5" src={assets.basket_icon} alt="Basket" />
                </button>
                <button className="bg-[tomato] text-white font-medium px-4 py-1 rounded-md hover:bg-[#ff6347] transition-colors cursor-pointer text-sm">
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

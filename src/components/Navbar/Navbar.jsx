import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={assets.logo} alt="logo" />
        <ul className="navbar navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
        <div className="navbar navbar-right">
          <img src={assets.search_icon} alt="search-icon" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket-icon" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

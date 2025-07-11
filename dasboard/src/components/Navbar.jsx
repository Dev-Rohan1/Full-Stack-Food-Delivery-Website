import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="flex items-center justify-between container mx-auto px-8 py-4">
        <Link to="/">
          <img className="w-[100px]" src={assets.logo} alt="logo" />
        </Link>

        <div className="relative">
          <img
            onClick={() => setDropdown(!dropdown)}
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src="https://avatars.githubusercontent.com/u/136685761?s=400&u=a5b07eb84082764b0699bc1c94b5e237ef560f78&v=4"
            alt="User avatar"
          />

          {dropdown && (
            <ul className="absolute top-14 right-0 border border-gray-200 bg-white shadow-lg rounded-md p-2 w-[120px] z-10">
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                Profile
              </li>
              <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                Logout
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

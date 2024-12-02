import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      {/* Upper Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Navigation Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 text-lg"
          >
            Home
          </a>
          <a
            href="#news"
            className="hover:text-blue-400 transition duration-300 text-lg"
          >
            News
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Login and Signup */}
        <div className="flex gap-4">
          <a
            href="#login"
            className="hover:text-blue-400 transition duration-300 text-lg"
          >
            Login
          </a>
          <a
            href="#signup"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </a>
        </div>
      </div>

      {/* Lower Navbar with Dropdown */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto py-3 flex justify-start">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg hover:text-blue-400 flex items-center gap-1 transition duration-300"
            >
              Education
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-gray-700 rounded-lg shadow-lg w-48 animate-fade-in-down">
                <ul className="text-gray-200">
                  <li className="px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <a href="#maqsuda">Maqsuda University</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <a href="#shapur">Shapur Institute</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <a href="#public">Public Education</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <a href="#world">Global Education</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600 transition duration-300">
                    <a href="#global">International Studies</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

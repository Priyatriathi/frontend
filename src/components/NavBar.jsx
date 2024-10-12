import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <nav className="bg-slate-300 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Title */}
        <div className="text-lg font-bold text-gray-900">
          <Link to="/">Placement Portal</Link>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/resources">Job Openings</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/about-us">About</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/createaccount">Create Account</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/forgotpassword">Forget Password</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        {/* Search Icon and Auth Buttons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-black w-5 h-5 cursor-pointer hover:text-gray-500" />
          <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Login
          </button>
          <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <ul className="md:hidden bg-slate-300 text-gray-900 space-y-4 p-4">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/resources">Job Openings</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/about-us">About</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/createaccount">Create Account</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/forgotpassword">Forget Password</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Adobe6 from "../assets/Adobe6.png";
import favourite from "../assets/favourite.png";
import shoppingBag from "../assets/shoppingBag.png";
import logo from "../assets/LOGO.png"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile menu
  const [cartCount, setCartCount] = useState(0); // Example count, replace with actual count from your app state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="fixed shadow-custom-shadow top-0 z-40 w-full backdrop-blur-sm">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 lg:h-8 2xl:h-8" alt="Flowbite Logo" />
            <span className="self-center lg:text-2xl 2xl:text-2xl font-medium whitespace-nowrap text-gray-500">Dress<strong className='text-black'>Zone</strong></span>
          </a>
          <div className="flex md:order-2">
            {/* Search Bar */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="xl:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-2"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            
            <div className="relative hidden xl:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center mt-1 lg:ml-8 2xl:ml-14 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="flex text-sm md:me-0 focus:ring-1 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6" src={favourite} alt="favourite icon"/>
              </button>
            </div>

            <div className="relative flex items-center ml-1 md:ml-1 lg:ml-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="flex text-sm md:me-0 focus:ring-1 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" src={shoppingBag} alt="shopping bag icon"/>
                {cartCount > -1 && (
                  <span className="absolute top-2 left-5 2xl:left-7 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center ml-3 mr-1 md:ml-5 lg:ml-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                onClick={toggleProfileMenu} // Toggle profile menu on click
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open profile menu</span>
                <img className="w-5 h-5 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 rounded-full" src={Adobe6} alt="Adobe icon"/>
              </button>

              {/* Profile Menu */}
              {isProfileMenuOpen && (
                <div className="absolute z-50 right-1 top-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Yugantha Polhengoda</span>
                    <span className="block text-xs text-gray-500 truncate dark:text-gray-400">yuganthapolhengoda@gmail.com</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown Button */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col lg:text-base 2xl:text-lg p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Category
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Mega Menu Dropdown */}
        {isDropdownOpen && (
          <div
            id="mega-menu-full-dropdown"
            className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
          >
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
              <ul>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Kid's Clothings</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Men's Clothings</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Women's Clothings</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Brands</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Online Stores</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="font-semibold">Marketing CRM</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

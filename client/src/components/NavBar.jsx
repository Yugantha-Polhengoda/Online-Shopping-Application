import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


import search_icon from "../assets/search_icon.png";
import Adobe6 from "../assets/Adobe6.png";
import DressZone from "../assets/DressZone.png";
import favourite from "../assets/favourite.png";
import shoppingBag from "../assets/shoppingBag.png";
import cross_icon from '../assets/cross_icon.png'
import logo from "../assets/LOGO.png"
import SearchBar from './SearchBar';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile menu
  const [cartCount, setCartCount] = useState(0); // Example count, replace with actual count from your app state
  const [isScrolled, setIsScrolled] = useState(false); // State to manage background color
  const dropdownRef = useRef < HTMLDivElement > null;

  const { search, setSearch, showSearch, setShowSearch, getCartCount } =
    useContext(ShopContext);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Adjust scroll position as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const inputClassName = `4${
    location.pathname === "/" && !isScrolled ? "placeholder-white " : ""
  }`;

  const buttonClassName = `${
    location.pathname === "/" && !isScrolled ? "" : ""
  }`;

  const strokeColor =
    location.pathname === "/" && !isScrolled
      ? "#ffffff" // White when not scrolling and on homepage
      : "#000000"; // Black otherwise

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-[999] shadow-custom-shadow w-full transition-colors duration-300 ${
        location.pathname === "/" && !isScrolled ? "bg-transparent" : "bg-white"
      }`}
    >
      <nav
        className={`border-gray-200 ${
          location.pathname === "/" && !isScrolled ? "bg-white" : "bg-white"
        } dark:bg-gray-900`}
        // bg-[#313a42]
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 lg:h-8 2xl:h-8"
              alt="Flowbite Logo"
            />
            {/* <img src={DressZone} className="h-6 lg:h-8 2xl:h-9" alt="Logo" /> */}
            <span className="self-center lg:text-2xl 2xl:text-2xl font-medium whitespace-nowrap text-gray-500">
              Dress
              <strong
                className={`text-black ${
                  location.pathname === "/" && !isScrolled ? "text-black" : ""
                }`}
              >
                Zone
              </strong>
            </span>
          </a>
          <div className="flex md:order-2">
            {/* Search Bar */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setShowSearch(true)}
              className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-2"
            >
              <NavLink to="/collection">
                <svg
                  className="w-5 h-5"
                  aria-hidden="false"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke={strokeColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </NavLink>
              <span className="sr-only">Search</span>
            </button>

            <div className="hidden lg:block ">
              <SearchBar
                containerClassName=""
                inputClassName={inputClassName}
                buttonClassName={buttonClassName}
              />
              <FaSearch
                className={`absolute top-[38px] ml-4 text-gray-500 ${
                  location.pathname === "/" && !isScrolled ? "text-black" : ""
                }`}
              />
            </div>

            {/* <div className="relative hidden lg:flex">
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
                // id="search-navbar"
                className="block w-full p-2 ps-10 pe-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <img onClick={()=>setShowSearch(false)} className=' w-3 h-3 -mx-6 my-4 cursor-pointer' src={cross_icon} alt=''/>
            </div> */}

            <div className="flex items-center mt-1 lg:ml-8 2xl:ml-14 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm md:me-0 focus:ring-1 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6"
                  src={favourite}
                  alt="favourite icon"
                />
              </button>
            </div>

            {/*--------- Cart --------*/}

            <div className="relative flex items-center ml-1 md:ml-1 lg:ml-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <NavLink to="/cart">
                <button
                  type="button"
                  className="flex text-sm md:me-0 focus:ring-1 rounded-full focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8"
                    src={shoppingBag}
                    alt="shopping bag icon"
                  />
                  <span className="absolute top-2 left-5 2xl:left-7 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2">
                    {getCartCount()}
                  </span>
                </button>
              </NavLink>
            </div>

            <div className="flex items-center ml-3 mr-1 md:ml-5 lg:ml-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <NavLink to="/login">
                <button
                  type="button"
                  onClick={toggleProfileMenu} // Toggle profile menu on click
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open profile menu</span>
                  <img
                    className="w-5 h-5 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 rounded-full"
                    src={Adobe6}
                    alt="Adobe icon"
                  />
                </button>
              </NavLink>

              {/* Profile Menu */}
              {isProfileMenuOpen && (
                <div className="absolute z-50 right-1 top-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Yugantha Polhengoda
                    </span>
                    <span className="block text-xs text-gray-500 truncate dark:text-gray-400">
                      yuganthapolhengoda@gmail.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
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
            <ul className="flex flex-col lg:text-base p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 
                            ${
                              location.pathname === "/" && !isScrolled
                                ? "text-black"
                                : ""
                            }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  onClick={toggleDropdown}
                  className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700
                             ${
                               location.pathname === "/" && !isScrolled
                                 ? "text-black"
                                 : ""
                             }`}
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
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                            ${
                              location.pathname === "/" && !isScrolled
                                ? "text-black"
                                : ""
                            }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 
                            ${
                              location.pathname === "/" && !isScrolled
                                ? "text-black"
                                : ""
                            }`}
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
            className="border-gray-200 border-t"
            id="mega-menu-full-dropdown"
          >
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
              <ul>
                <li>
                  <NavLink
                    to="/collection"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Collections
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/kids-clothing"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Kid's Clothings
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Explore our wide range of kids' clothing.
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mens-clothing"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Men's Clothings
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Browse our latest men's fashion.
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/womens-clothing"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Women's Clothings
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Discover the latest trends in women's clothing.
                    </span>
                  </NavLink>
                </li>
              </ul>
              <ul>
                <li>
                  <NavLink
                    to="/best-sellers"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Best Sellers
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Check out our best-selling products.
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/brands"
                    className={`block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                              ${
                                location.pathname === "/" && !isScrolled
                                  ? ""
                                  : ""
                              }`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`font-semibold ${
                        location.pathname === "/" && !isScrolled ? "" : ""
                      }`}
                    >
                      Brands
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Explore products from top brands.
                    </span>
                  </NavLink>
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

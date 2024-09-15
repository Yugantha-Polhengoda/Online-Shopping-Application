import React, { useContext, useState } from "react";
import { FaCreditCard, FaPaypal, FaMoneyBillAlt } from "react-icons/fa";

import CreditCards from "../assets/CreditCards.png";
import { ShopContext } from "../context/ShopContext";
import OrderSummary from "../components/OrderSummary";

const PlaceOrder = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const { cartItems, products, currency, navigate } = useContext(ShopContext);
    const [cardNumber, setCardNumber] = useState("");

    const cartData = Object.keys(cartItems).flatMap((itemId) =>
      Object.keys(cartItems[itemId]).flatMap((size) =>
        Object.keys(cartItems[itemId][size])
          .filter((color) => cartItems[itemId][size][color] > 0)
          .map((color) => {
            const product = products.find((prod) => prod._id === itemId);
            return product
              ? {
                  ...product,
                  size,
                  color,
                  quantity: cartItems[itemId][size][color],
                }
              : null;
          })
          .filter(Boolean)
      )
    );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
    
  
   const formatCardNumber = (value) => {
     return value
       .replace(/\D/g, "")
       .replace(/(.{4})/g, "$1 ")
       .trim();
   };

   const handleCardNumberChange = (e) => {
     const formattedCardNumber = formatCardNumber(e.target.value);
     setCardNumber(formattedCardNumber);
   };

  return (
    <div className="bg pt-40 pb-40">
      <div className="grid justify-center xl:grid-cols-2">
        <div className="ml-2 xl:ml-24 max-w-[576px]">
          <div>
            <OrderSummary cartData={cartData} currency={currency} />
          </div>
          <div className="py-5">
            <h1 className="text-lg font-bold">Delivery Information</h1>
            <div className="p-4 rounded-lg dark:bg-gray-800">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm dark:text-gray-400 mt-2">First name</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm dark:text-gray-400 mt-2">Last name</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-sm dark:text-gray-400 mt-3">Email</p>
              <input
                className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                type="email"
              />
              <p className="text-sm dark:text-gray-400 mt-3">Street</p>
              <input
                className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                type="text"
              />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm dark:text-gray-400 mt-3">City</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm dark:text-gray-400 mt-3">State</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm dark:text-gray-400 mt-3">Zipcode</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
                <div>
                  <p className="text-sm dark:text-gray-400 mt-3">Country</p>
                  <input
                    className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <p className="text-sm dark:text-gray-400 mt-3">Phone number</p>
              <input
                className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="xl:ml-36 sm:max-w-[555px] mt-2">
          <h1 className="text-lg ml-2 sm:ml-0 font-bold">
            Payment Information
          </h1>
          <div className="mx-1 md xl:mx-8 py-5">
            <div className="pt-3">
              <div className="mb-4">
                <ul
                  className="grid grid-cols-3 -mb-px sm:h-10 text-custom-xs sm:text-xs font-medium text-center bg-gray-100 rounded-full"
                  role="tablist"
                >
                  <li className="me-12 sm:me-2" role="presentation">
                    <button
                      className={`inline-block w-24 sm:w-40 h-10 ${
                        activeTab === "profile"
                          ? "bg-blue-600 text-white rounded-full"
                          : "hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300 rounded-full"
                      }`}
                      onClick={() => handleTabClick("profile")}
                      type="button"
                      role="tab"
                      aria-controls="credit-card-content"
                      aria-selected={activeTab === "profile"}
                    >
                      <FaCreditCard className="inline sm:mr-2 text-sm" /> Credit
                      Card
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className={`inline-block w-24 sm:w-40 h-10 rounded-full ${
                        activeTab === "dashboard"
                          ? "bg-blue-600 text-white"
                          : "hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300 rounded-full"
                      }`}
                      onClick={() => handleTabClick("dashboard")}
                      type="button"
                      role="tab"
                      aria-controls="paypal-content"
                      aria-selected={activeTab === "dashboard"}
                    >
                      <FaPaypal className="inline sm:mr-2 text-sm" /> PayPal
                    </button>
                  </li>
                  <li role="presentation" className="ms-6 sm:ms-0">
                    <button
                      className={`inline-block w-28 sm:w-40 h-10  rounded-full ${
                        activeTab === "settings"
                          ? "bg-blue-600 text-white"
                          : "hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300 rounded-full"
                      }`}
                      onClick={() => handleTabClick("settings")}
                      type="button"
                      role="tab"
                      aria-controls="cod-content"
                      aria-selected={activeTab === "settings"}
                    >
                      <FaMoneyBillAlt className="inline sm:mr-2 text-sm" /> Cash
                      On Delivery
                    </button>
                  </li>
                </ul>
              </div>
              <div id="default-tab-content">
                {activeTab === "profile" && (
                  <div
                    id="credit-card-content"
                    className="p-4 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <p className="text-sm dark:text-gray-400">Full name</p>
                    <input
                      className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                      type="text"
                    />
                    <p className="text-sm dark:text-gray-400 mt-5">
                      Card number
                    </p>
                    <div className="relative">
                      <img
                        src={CreditCards}
                        className="absolute top-0 right-2 mt-1.5 w-24"
                      />
                      <input
                        className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div>
                        <p className="text-sm dark:text-gray-400 mt-5">
                          Expiry date
                        </p>
                        <input
                          className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                          type="date"
                        />
                      </div>
                      <div>
                        <p className="text-sm dark:text-gray-400 mt-5">CVV</p>
                        <input
                          className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                          type="number"
                          maxLength={4}
                        />
                      </div>
                    </div>
                    {/* <button className="bg-blue-600 w-full mt-6 p-2 rounded-full text-white">
                      Confirm
                    </button> */}
                  </div>
                )}
                {activeTab === "dashboard" && (
                  <div
                    id="paypal-content"
                    className="p-4 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <p className="text-sm dark:text-gray-400">Email</p>
                    <input
                      className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <p className="text-sm dark:text-gray-400 mt-3">Password</p>
                    <input
                      className="bg-gray-100 w-full h-8 mt-1 px-2 border-2 border-gray-300"
                      type="text"
                      placeholder="Enter your password"
                    />
                    <div className="flex gap-2 mt-6 justify-center">
                      <input
                        className="bg-gray-100 w-4 h-4 mt-1 px-2 border-2 border-gray-300"
                        type="checkbox"
                      />
                      <h1 className=" mt-0.5">
                        Stay logged in for faster checkouts{" "}
                        <span className="text-blue-500 font-semibold border-2 border-blue-500 py-0.5 px-1.5 ml-1 rounded-full">
                          ?
                        </span>{" "}
                      </h1>
                    </div>
                    <button className="bg-blue-600 w-full mt-6 p-2 rounded-full text-white">
                      Log in
                    </button>
                  </div>
                )}
                {activeTab === "settings" && (
                  <div
                    id="cod-content"
                    className="p-4 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      We'll deliver to your delivery address{" "}
                      <strong className="font-medium text-gray-800 dark:text-white">
                        within 4 - 7 working days
                      </strong>
                      . Out country deliveries{" "}
                      <strong className="font-medium text-gray-800 dark:text-white">
                        up to 10 - 20 days
                      </strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-4 mt-4 px-1 sm:px-8">
            <button
              onClick={() => navigate("/orders")}
              className="w-full px-8 py-2 text-custom-Sx sm:text-base text-white bg-black rounded-lg"
            >
              PLACE ORDER
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="w-full px-8 py-2 text-custom-Sx sm:text-base text-white bg-black rounded-lg"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

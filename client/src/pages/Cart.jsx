import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faGift,
  faTruck,
  faCreditCard,
  faArrowLeft,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/ShopContext";
import upArrow from "../assets/upArrow.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        for (const color in cartItems[itemId][size]) {
          if (cartItems[itemId][size][color] > 0) {
            const product = products.find((prod) => prod._id === itemId);

            if (product) {
              tempData.push({
                ...product,
                size,
                color,
                quantity: cartItems[itemId][size][color],
              });
            }
          }
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  const incrementQuantity = (itemId, size, color) => {
    updateQuantity(itemId, size, color, cartItems[itemId][size][color] + 1);
  };

  const decrementQuantity = (itemId, size, color) => {
    const newQuantity = cartItems[itemId][size][color] - 1;
    if (newQuantity > 0) {
      updateQuantity(itemId, size, color, newQuantity);
    } else {
      updateQuantity(itemId, size, color, 0);
    }
  };

  return (
    <div className="pt-28 lg:pt-32 bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="wrapper-content animated fadeInRight">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <h5 className="text-lg font-bold">Items in your cart</h5>
                  <span className="text-gray-600">
                    (<strong>{cartData.length}</strong>) items
                  </span>
                </div>
                <div className="md:px-4">
                  <div className="overflow-x-auto">
                    <div className="">
                      {cartData.map((item, index) => (
                        <div
                          className="border-b border-gray-200 pt-4 pb-4"
                          key={`${item._id}-${item.size}-${item.color}`}
                        >
                          <div className="flex">
                            <div className="max-w-56 md:max-w-48 p-1 lg:max-w-52 xl:p-4">
                              <img
                                className="w-full"
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className="px-2 md:py-4 md:px-4">
                              <h3 className="text-navy text-xs lg:text-xl font-semibold">
                                <a href="#" className="text-blue-600">
                                  {item.name}
                                </a>
                              </h3>
                              <div className="overflow-hidden h-8 md:h-9 lg:h-14">
                                <p className="text-gray-500 text-custom-xs lg:text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <div className="text-custom-xs lg:text-sm my-2">
                                <div className="font-semibold md:mb-1">
                                  Size: {item.size}
                                </div>
                                <div className="font-semibold">
                                  Color: {item.color}
                                </div>
                              </div>

                              <div className="my-1 grid grid-cols-2 lg:grid-cols-3 text-custom-xs lg:text-sm md:my-4 md:w-80 lg:my-2 lg:w-[400px] 2xl:float-end 2xl:-mt-4">
                                <div className="grid">
                                  <div>
                                    <span>Item&nbsp;price:</span>
                                    <span className="ml-2">
                                      {currency}
                                      {item.price}
                                    </span>
                                  </div>
                                  <div className="">
                                    Discount:
                                    <s className="text-custom-xs lg:text-sm text-gray-400 ml-2">
                                      {currency}
                                      {item.Price}0
                                    </s>
                                  </div>
                                </div>
                                <div className="inline-flex lg:ml-2">
                                  <input
                                    type="number"
                                    className="form-control w-12 border border-gray-300  pl-3 md:py-2"
                                    value={item.quantity}
                                    readOnly
                                  />
                                  <div className="grid -ml-3.5 bg-gray-100">
                                    <button
                                      onClick={() =>
                                        incrementQuantity(
                                          item._id,
                                          item.size,
                                          item.color
                                        )
                                      }
                                      className="w-3.5 px-0.5 border"
                                    >
                                      <img src={upArrow} alt="Increase" />
                                    </button>
                                    <button
                                      onClick={() =>
                                        decrementQuantity(
                                          item._id,
                                          item.size,
                                          item.color
                                        )
                                      }
                                      className="w-3.5 px-0.5 rotate-180 border"
                                    >
                                      <img src={upArrow} alt="Decrease" />
                                    </button>
                                  </div>
                                </div>
                                <div className="mt-1 md:mt-1.5 md:text-sm lg:mt-2.5 lg:-ml-14 2xl:text-lg">
                                  <h4 className="2xl:-mt-1">
                                    Total:
                                    <span className="ml-2">
                                      {currency}
                                      {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                  </h4>
                                </div>
                              </div>

                              <div className="grid grid-flow-col  text-custom-xs lg:text-xs lg:grid-flow-col lg:mt-2 float-start xl:-mt-9 xl:float-end 2xl:float-start 2xl:mt-2">
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900 "
                                >
                                  <FontAwesomeIcon icon={faGift} /> Add gift
                                  package
                                </a>
                                <span className="mx-2 lg:block"> | </span>
                                <a
                                  onClick={() =>
                                    updateQuantity(
                                      item._id,
                                      item.size,
                                      item.color,
                                      0
                                    )
                                  }
                                  className="text-gray-600 hover:text-gray-900 lg:ml-2 cursor-pointer"
                                >
                                  <FontAwesomeIcon icon={faTrash} /> Remove item
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex text-xs sm:text-sm flex-row justify-between">
                  <NavLink to="/collection">
                    <button className="btn btn-white bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg mb-2 sm:mb-0">
                      <FontAwesomeIcon icon={faArrowLeft} /> Continue shopping
                    </button>
                  </NavLink>
                    <button
                      onClick={() => navigate("/placeOrder")}
                      className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faCreditCard} /> Checkout
                    </button>
                </div>
              </div>
            </div>

            {/* Cart Summary and Support sections */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h5 className="text-lg font-bold">Order Summary</h5>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-gray-600">
                    Subtotal: {currency}{" "}
                    {cartData
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </div>
                  <div className="mb-2 text-gray-600">
                    Shipping: {currency} 10.00
                  </div>
                  <div className="mb-2 text-gray-600">
                    Taxes: {currency} 5.00
                  </div>
                  <div className="border-t pt-2 mt-2 font-bold pb-4">
                    Total: {currency}{" "}
                    {(
                      cartData.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) + 15.0
                    ).toFixed(2)}
                  </div>
                  <div className=""></div>
                  <div className="mb-2">
                    *For United States, France and Germany applicable sales tax
                    will be applied
                  </div>

                  <button
                    onClick={() => navigate("/placeOrder")}
                    className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faCreditCard} /> Checkout
                  </button>
                </div>
              </div>
              {/* <div className="bg-white shadow rounded-lg mb-6">
                <div className="p-6">
                  <div className="text-gray-600">
                    <FontAwesomeIcon icon={faTruck} />
                    <span className="ml-2">
                      Free Shipping on Orders Over {currency} 500.00!
                    </span>
                  </div>
                  <div className="text-gray-600 mt-3">
                    <FontAwesomeIcon icon={faGift} />
                    <span className="ml-3">Add a gift card to your order!</span>
                  </div>
                </div>
              </div> */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="p-6">
                  <div className="text-gray-600">
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <span className="ml-2">
                      Cash On Delivery Within The Country!
                    </span>
                  </div>
                  <div className="text-gray-600 mt-2">
                    <FontAwesomeIcon icon={faTruck} />
                    <span className="ml-2">
                      Free Shipping on Orders Over {currency} 500.00!
                    </span>
                  </div>
                  <div className="text-gray-600 mt-2">
                    <FontAwesomeIcon icon={faGift} />
                    <span className="ml-3">Add a gift card to your order!</span>
                  </div>
                </div>
                <hr className="" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">
                    <i className="fa fa-phone"></i> +94 764 5678
                  </h3>
                  <p className="text-sm text-gray-500">
                    Please contact with us if you have any questions. We are
                    avalible 24h.
                  </p>
                </div>
                {/* <RelatedProduct
                  category={productData.category}
                  subCategory={productData.subCategory}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoIosSettings } from "react-icons/io";

import SizeChart from "../assets/SizeChart.png";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import upArrow from "../assets/upArrow.png";
import RelatedProducts from "../components/RelatedProducts";
import Special from "../components/Special";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [isSizeChartVisible, setIsSizeChartVisible] = useState(false);

  const fetchProductData = async () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  // Function to handle incrementing quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrementing quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity from going below 1
  };

  // Function to toggle the visibility of the SizeChart
  const toggleSizeChartVisibility = () => {
    setIsSizeChartVisible((prev) => !prev);
  };

  return productData ? (
    <div className="titillium-web-regular border-t-2 px-[5%] md:px-[9%] lg:px-[5%] xl:px-[9%] pt-32 lg:pt-40 pb-40 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col lg:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row xl:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.Image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[20%] md:w-[88%] lg:w-[94%] xl:w-[100%] sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full md:w-[71%] lg:w-[80%] xl:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-3xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="bg-slate-60 max-w-[437px] overflow-hidden">
            <button
              onClick={toggleSizeChartVisibility}
              className="inline-flex float-end gap-0 pt-2"
            >
              <IoIosSettings
                size={19}
                className={`ml-4 text-blue-600 transition-all ${
                  isSizeChartVisible
                    ? "SizeChart__button__rotate"
                    : "SizeChart__button__rotate_back"
                }`}
              />
              <span className="text-[13px]">Size Chart</span>
            </button>
            <img
              src={SizeChart}
              className={`w-[437px] mt-7 transition-all duration-500 ease-in-out 
              ${
                isSizeChartVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-100"
              } 
              flex items-center justify-center`}
              alt="Size Chart"
            />
            {/* ${isSizeChartVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} flex items-center justify-center */}

            <div className="ml-2 -mt-60 md:-mt-[330px]">
              <div className="flex items-center gap-2">
                <img src={star_icon} alt="" className="w-4" />
                <img src={star_icon} alt="" className="w-4" />
                <img src={star_icon} alt="" className="w-4" />
                <img src={star_icon} alt="" className="w-4" />
                <img src={star_dull_icon} alt="" className="w-4" />
                <p className="pl-4 md:pl-[82px] text-yellow-600">
                  4.25
                  <span className="ml-2 text-xs text-black">(122 reviews)</span>
                </p>
              </div>

              <div className="flex flex-col gap-4 my-4 md:my-8">
                <div className="md:flex gap-[73px]">
                  <div>
                    <p>Select Size: </p>
                    <div className="flex gap-2 pt-2">
                      {productData.sizes.map((item, index) => (
                        <button
                          onClick={() => setSize(item)}
                          className={`border rounded-lg py-1 px-3 bg-gray-100 hover:bg-gray-200 ${
                            item === size
                              ? "border-shadow border-blue-500 border-2 shadow-md shadow-blue-500 bg-gray-200"
                              : ""
                          }`}
                          key={index}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block mt-5 md:mt-0">Choose color:</label>
                    <ul className="flex space-x-2 list-none p-0 m-0 lg:mt-4">
                      {productData.colors.map((item, index) => {
                        const colorClassMap = {
                          Black: "bg-black hover:bg-gray-700",
                          White: "bg-slate-200 hover:bg-slate-300",
                          Yellow: "bg-yellow-500 hover:bg-yellow-600",
                          Red: "bg-red-500 hover:bg-red-600",
                          Purple: "bg-purple-500 hover:bg-purple-600",
                          Green: "bg-green-500 hover:bg-green-600",
                          Blue: "bg-blue-500 hover:bg-blue-600",
                          Pink: "bg-pink-200 hover:bg-pink-300",
                        };

                        return (
                          <li
                            key={index}
                            onClick={() => setColor(item)}
                            className={`w-6 h-6 lg:w-6 lg:h-6 mt-2 lg:-mt-1 rounded-full cursor-pointer ${
                              colorClassMap[item]
                            } ${
                              item === color
                                ? "outline outline-blue-500 outline-offset-2"
                                : ""
                            }`}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="md:flex gap-[71px] ">
                  <div
                    className={`relative mt-3 lg:mt-6 mb-2 transition-all duration-500 ease-in-out
                              ${isSizeChartVisible ? "-z-10" : "z-10"}`}
                  >
                    <span className="text-sm mt-2 mr-2 float-left text-gray-800">
                      Quantity
                    </span>
                    <div className="flex items-center">
                      <input
                        className="inline-block border-2 shadow_inner w-12 h-10 p-2 text-center"
                        name="quantityNumber"
                        type="text"
                        value={quantity}
                        readOnly
                      />
                      <div className="grid pl-3.5 gap-2">
                        <button onClick={incrementQuantity} className="w-2.5">
                          <img src={upArrow} alt="Increase" />
                        </button>
                        <button
                          onClick={decrementQuantity}
                          className="w-2.5 rotate-180"
                        >
                          <img src={upArrow} alt="Decrease" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="lg:mt-5 mt-7 text-2xl font-semibold">
                      <span className="text-gray-600">Price:</span>{" "}
                      <span className="">
                        {currency}
                        {productData.price}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400">
                      Shipping and taxes extra
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    addToCart(productData._id, size, color, quantity)
                  }
                  className="bg-blue-500 text-white p-2 max-w-40 rounded-lg text-sm active:bg-blue-700 mt-2"
                >
                  Add To Cart
                </button>
                <hr className="mt-4 sm:w-4/5" />
                <div className="grid text-sm text-gray-500 mt-2 gap-1 sm:grid-cols-3 sm:mt-0 sm:gap-10 md:grid-cols-1 md:gap-1">
                  <p>100% Original Product</p>
                  <p>Cash On Delivery</p>
                  <p>Easy Return Within 7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Description & Review Section ---------------------- */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm text-gray-500">Reviews(122)</p>
        </div>
        <div className="w-full p-5 border text-gray-500">
          <p className="pb-4">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* ------------------- Related Products & Special Offers ------------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default Product;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import OFTshirt1 from "../assets/OF-Tshirt1.png";
import OFTshirt2 from "../assets/OF-Tshirt2.png";
import OFTshirt3 from "../assets/OF-Tshirt3.png";
import OFTshirt4 from "../assets/OF-Tshirt4.png";

const products = [
  {
    id: 1,
    image: OFTshirt1,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 2,
    image: OFTshirt2,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 3,
    image: OFTshirt3,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 4,
    image: OFTshirt4,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 5,
    image: OFTshirt1,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 6,
    image: OFTshirt2,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 7,
    image: OFTshirt3,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 8,
    image: OFTshirt4,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
  },
];

const Offers = () => {
  return (
    <div className="items-center justify-center pt-20 pb-20 text-center">
      <legend data-wow-delay="100ms">Special Offers</legend>
      <hr className="w-3/4 mx-auto border-t-2 border-blue-900 rounded-lg shadow-lg my-4" />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        className="mt-8 ml-20 mr-20"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="h-64">
                <a href="#">
                  <img className="p-8 rounded-t-lg" src={product.image} alt={product.title} />
                </a>
              </div>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  ))}
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                  <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Offers;

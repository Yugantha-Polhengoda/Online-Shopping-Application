import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import jpeg1 from "../assets/jpeg1.jpg";
import jpeg3 from "../assets/jpeg3.jpg";
import jpeg4 from "../assets/jpeg4.jpg";
import jpeg6 from "../assets/jpeg6.jpg";

const products = [
  {
    id: 1,
    image: jpeg1,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 2,
    image: jpeg3,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 3,
    image: jpeg4,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 4,
    image: jpeg6,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 5,
    image: jpeg1,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 6,
    image: jpeg3,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 7,
    image: jpeg4,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 8,
    image: jpeg6,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
];

const Offers = () => (
  <div className="p-0 xl:p-4">
    <Swiper
      modules={[Navigation, Autoplay]} // Include Autoplay module
      navigation
      autoplay={{ 
        delay: 2000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
      }} 
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={2}
      className=''
      breakpoints={{
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 4 },
        1440: { slidesPerView: 5 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Card = ({ product }) => (
  <div className="LatestProduct bg-slate-500 w-full h-52  md:h-60  lg:h-80  xl:h-96 mt-3 relative rounded-lg overflow-hidden">
    <div className="imgbox h-3/5">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="Latestdetails px-2 py-2 lg:px-3 lg:py-3 bottom-[-135px] lg:bottom-[-195px] absolute w-full bg-opacity-90 p-4">
      <h2 className="text-custom-xs lg:text-sm font-semibold">{product.title}<br/><span>{product.description}</span></h2>
      <div className="Latestprice right-[8px] lg:right-[20px] text-custom-Sx lg:text-lg mt-2">{product.price}</div>
      <label className="block mt-1 lg:mt-4 font-bold">Sizes</label>
        <ul className="flex space-x-2 list-none p-0 m-0">
          <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-sm lg:text-base">S</li>
            <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-sm lg:text-base">M</li>
            <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-sm lg:text-base">L</li>
            <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-sm lg:text-base">XL</li>
        </ul>
      <label className="block mt-1 lg:mt-4 font-bold">Color</label>
        <ul className="flex space-x-2 list-none p-0 m-0">
          <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-600"></li>
          <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-red-500 hover:bg-red-600"></li>
          <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-purple-500 hover:bg-purple-600"></li>
          <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-teal-500 hover:bg-teal-600"></li>
          <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600"></li>
        </ul>
        <a href="#" className="block mt-2 lg:mt-4 bg-blue-500 text-white text-center text-custom-Sx lg:text-lg py-2 rounded hover:bg-blue-600">Add To Cart</a>
      </div>
  </div>
);

export default Offers;



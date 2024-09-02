import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import jpeg1 from "../assets/jpeg1.jpg";
import jpeg3 from "../assets/jpeg3.jpg";
import jpeg4 from "../assets/jpeg4.jpg";
import jpeg6 from "../assets/jpeg6.jpg";
import womens3 from "../assets/womens3.jpg";
import womens4 from "../assets/womens4.jpg";

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
    image: womens3,
    title: "Women's",
    description: "Women's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 4,
    image: womens4,
    title: "Women's",
    description: "Women's Designer T-Shirt",
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
    image: womens3,
    title: "Women's",
    description: "Women's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 8,
    image: womens4,
    title: "Women's",
    description: "Women's Designer T-Shirt",
    price: "$55.99",
  },
];

const Trending = () => (
  <div className="p-4">
    <Swiper
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={48}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
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
  <div className="product bg-slate-500 w-full h-96 mt-3 relative overflow-hidden">
    <div className="imgbox h-3/5">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="details absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
      <h2 className="text-xl font-semibold">{product.title}<br/><span>{product.description}</span></h2>
      <div className="price text-lg mt-2">{product.price}</div>
      <label className="block mt-4 font-bold">Sizes</label>
      <ul className="flex space-x-2 list-none p-0 m-0">
        <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">S</li>
        <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">M</li>
        <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">L</li>
        <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">XL</li>
      </ul>
      <label className="block mt-4 font-bold">Color</label>
      <ul className="flex space-x-2 list-none p-0 m-0">
        <li className="w-6 h-6 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-600"></li>
        <li className="w-6 h-6 rounded-full cursor-pointer bg-red-500 hover:bg-red-600"></li>
        <li className="w-6 h-6 rounded-full cursor-pointer bg-purple-500 hover:bg-purple-600"></li>
        <li className="w-6 h-6 rounded-full cursor-pointer bg-teal-500 hover:bg-teal-600"></li>
        <li className="w-6 h-6 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600"></li>
      </ul>
      <a href="#" className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">Add To Cart</a>
    </div>
  </div>
);

export default Trending;

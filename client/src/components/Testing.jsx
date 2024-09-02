import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    image: jpeg6,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 6,
    image: jpeg6,
    title: "Men's",
    description: "Men's Designer T-Shirt",
    price: "$55.99",
  },
];

const Testing = () => (
  <div className="p-4">
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
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
  <div className="product bg-slate-500 w-full h-96 relative rounded-lg shadow-lg overflow-hidden">
    <div className="imgbox h-3/5">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="details absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
      <h2 className="text-xl font-semibold">{product.title}<br/><span>{product.description}</span></h2>
      <div className="price text-lg mt-2">{product.price}</div>
      <label className="block mt-4 font-bold">Sizes</label>
      <ul className="flex space-x-2 list-none p-0 m-0">
        <li className="bg-gray-200 rounded px-2 py-1">S</li>
        <li className="bg-gray-200 rounded px-2 py-1">M</li>
        <li className="bg-gray-200 rounded px-2 py-1">L</li>
        <li className="bg-gray-200 rounded px-2 py-1">XL</li>
      </ul>
      <label className="block mt-4 font-bold">Color</label>
      <ul className="flex space-x-2 list-none p-0 m-0">
        <li className="w-6 h-6 rounded-full bg-yellow-500"></li>
        <li className="w-6 h-6 rounded-full bg-red-500"></li>
        <li className="w-6 h-6 rounded-full bg-purple-500"></li>
        <li className="w-6 h-6 rounded-full bg-teal-500"></li>
        <li className="w-6 h-6 rounded-full bg-blue-500"></li>
      </ul>
      <a href="#" className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">Add To Cart</a>
    </div>
  </div>
);

export default Testing;

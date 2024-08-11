import React from 'react';
import jpeg1 from "../assets/jpeg1.jpg";
import jpeg3 from "../assets/jpeg3.jpg";
import jpeg4 from "../assets/jpeg4.jpg";
import jpeg6 from "../assets/jpeg6.jpg";

const products = [
  {
    id: 1,
    image: jpeg1,
    title: "Men's",
    disciption: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 2,
    image: jpeg3,
    title: "Men's",
    disciption: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 3,
    image: jpeg4,
    title: "Men's",
    disciption: "Men's Designer T-Shirt",
    price: "$55.99",
  },
  {
    id: 4,
    image: jpeg6,
    title: "Men's",
    disciption: "Men's Designer T-Shirt",
    price: "$55.99",
  },
];

const Testing = () => (
    <div className="flex flex-wrap gap-4 p-4">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );


const Card = ({ product }) => (
  <div className="product bg-slate-500 w-80 h-96 relative rounded-lg shadow-lg overflow-hidden m-9 md:m-5 lg:m-0 xl:m-2.5 2xl:ml-6">
    <div className="imgbox h-3/5">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="details absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
      <h2 className='text-xl font-semibold'>{product.title}<br/><span>{product.disciption}</span></h2>
      <div className="price text-lg mt-2">{product.price}</div>
      <label className='block mt-4 font-bold'>Sizes</label>
      <ul className='flex space-x-2 list-none p-0 m-0'>
        <li className='bg-gray-200 rounded px-2 py-1'>S</li>
        <li className='bg-gray-200 rounded px-2 py-1'>M</li>
        <li className='bg-gray-200 rounded px-2 py-1'>L</li>
        <li className='bg-gray-200 rounded px-2 py-1'>XL</li>
      </ul>
      <label className='block mt-4 font-bold'>Color</label>
      <ul className='flex space-x-2 list-none p-0 m-0'>
        <li className='w-6 h-6 rounded-full bg-yellow-500'></li>
        <li className='w-6 h-6 rounded-full bg-red-500'></li>
        <li className='w-6 h-6 rounded-full bg-purple-500'></li>
        <li className='w-6 h-6 rounded-full bg-teal-500'></li>
        <li className='w-6 h-6 rounded-full bg-blue-500'></li>
      </ul>
      <a href='#' className='block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600'>Add To Cart</a>
    </div>
  </div>
);

export default Testing;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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
      modules={[Navigation]}
      navigation
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
    <div className="Latestdetails px-2 py-2 lg:px-3 lg:py-3 bg-gray-400 bottom-[-135px] lg:bottom-[-195px] absolute w-full bg-opacity-90 p-4">
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





// import React, { useContext, useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation'; // Import Swiper navigation CSS
// import { Navigation } from 'swiper'; // Import the Navigation module
// import { ShopContext } from '../context/ShopContext';

// const LatestCollections = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 8));
//   }, [products]);

//   return (
//     <div>
//       <div className='mb-40 mx-10'>
//         <div className='text-center py-8 text-2xl'>
//           <h1 className='text-gray-600'>Latest Collections</h1>
//           <p className='text-gray-600 m-auto w-3/4 text-xs sm:text-sm md:text-base'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//           </p>
//         </div>

//         <div className='p-4'>
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={2}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//             pagination={{ clickable: true }}
//             navigation// Enable navigation arrows
//             modules={[Navigation]} 
//             className='mySwiper mySwiperArrows'
//           >
        
        
//           {latestProducts.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div id={item._id} className="product bg-slate-500 w-80 h-96 mt-3 relative rounded-lg overflow-hidden">
//                 <div className="imgbox h-3/5">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-lg" />
//                 </div>

//                 <div className="details absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
//                   <div className='w-48'>
//                     <h2 className="text-xl text-gray-800 font-semibold">{item.name}</h2>
//                   </div>
//                   <div className="price text-lg text-gray-800 mt-2">$ {item.price}</div>
//                   <label className="block mt-4 font-bold">Sizes</label>
//                   <ul className="flex space-x-2 list-none p-0 m-0">
//                     <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">S</li>
//                     <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">M</li>
//                     <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">L</li>
//                     <li className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 cursor-pointer">XL</li>
//                   </ul>
//                   <label className="block mt-4 font-bold">Color</label>
//                   <ul className="flex space-x-2 list-none p-0 m-0">
//                     <li className="w-6 h-6 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-600"></li>
//                     <li className="w-6 h-6 rounded-full cursor-pointer bg-red-500 hover:bg-red-600"></li>
//                     <li className="w-6 h-6 rounded-full cursor-pointer bg-purple-500 hover:bg-purple-600"></li>
//                     <li className="w-6 h-6 rounded-full cursor-pointer bg-teal-500 hover:bg-teal-600"></li>
//                     <li className="w-6 h-6 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600"></li>
//                   </ul>
//                   <a href="#" className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">Add To Cart</a>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestCollections;


import React, {useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation CSS
import { Navigation } from 'swiper';
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=> {

        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=>category === item.category)
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory)

            setRelated(productsCopy.slice(1,9));
        }

    },[products, category, subCategory])

  return (
    <div className='mt-24'>
      <div className='text-center text-3xl py-2'>
        <h1>RELATED PRODUCTS</h1>
      </div>

      <div className="p-4">
        <Swiper
          spaceBetween={14}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
                slidesPerView: 5,
              },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >

        {related.map((item, index) => (
            <SwiperSlide key={index}>
            <div key={index} id={item._id} className="LatestProduct bg-slate-500 w-full h-52  md:h-60  lg:h-80 mt-3 relative rounded-lg overflow-hidden">
              <div className="imgbox h-3/5" >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-lg" />
              </div>

              <div className="Latestdetails px-2 py-2 lg:px-3 lg:py-3 bottom-[-135px] lg:bottom-[-195px] absolute bg-opacity-90">
              <div className='flex justify-between'>
                <div className='w-24 md:w-24 lg:w-36 '>
                  <h2 className="text-custom-xs lg:text-sm font-semibold">{item.name}</h2>
                </div>
                <div className="Latestprice right-[5px] lg:right-[20px] text-custom-Sx lg:text-lg mt-2 md:font-semibold">${item.price}</div>
              </div>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RelatedProducts

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'

const LatestCollections = () => {

    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
      setLatestProducts(products.slice(0,12));
    },[])

    console.log(products);
    
  return (
    <div>
      <div className='my-10 mx-3 md:mx-20 lg:mx-24 xl:mx-48'>
        <div className='text-center py-8 text-2xl'>
          <h1 className='text-gray-600'>Latest Collections</h1>
          <p className='text-gray-600 m-auto w-3/4 text-xs sm:text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>

       
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            // <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>outline outline-slate-500 outline-offset-2
            <div key={index} id={item._id} className="LatestProduct  bg-slate-500 w-full h-52  md:h-60  lg:h-80 mt-3 relative rounded-lg overflow-hidden">
              <NavLink to={`/product/${item._id}`}>
              <div className="imgbox h-3/5 overflow-hidden" >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-lg" />
              </div>

              <div className="Latestdetails px-2 py-2 lg:px-3 lg:py-3 bottom-[-99px] lg:bottom-[-185px] absolute bg-opacity-90">
              <div className='flex justify-between'>
                <div className='w-24 md:w-24 lg:w-36 '>
                  <h2 className="text-custom-xs lg:text-sm font-semibold">{item.name}</h2>
                </div>
                <div className="Latestprice right-[5px] lg:right-[20px] text-custom-Sx lg:text-lg mt-2">$ {item.price}</div>
              </div>
              <label className="block mt-1 lg:mt-4 text-custom-xs lg:text-sm font-medium">Available Sizes:</label>
                <ul className="flex space-x-2 list-none p-0 m-0">
                  <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">S</li>
                    <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">M</li>
                    <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">L</li>
                    <li className="bg-gray-300 rounded px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">XL</li>
                </ul>
              <label className="block mt-1 lg:mt-4 text-custom-xs lg:text-sm font-medium">Available Colors:</label>
                <ul className="flex space-x-2 list-none p-0 m-0">
                  <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-600"></li>
                  <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-red-500 hover:bg-red-600"></li>
                  <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-purple-500 hover:bg-purple-600"></li>
                  <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-teal-500 hover:bg-teal-600"></li>
                  <li className="w-3 h-3 lg:w-6 lg:h-6 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600"></li>
                </ul>

                <NavLink to={`/product/${item._id}`}>
                <a href="" className="block mt-2 lg:mt-4 bg-blue-500 text-white text-center text-custom-Sx lg:text-lg py-0.5 lg:py-1 rounded hover:bg-blue-600">Veiw</a>
                </NavLink>
              </div>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div> 

  </div>
  )
}

export default LatestCollections

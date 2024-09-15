import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

    const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-28 lg:pt-32 min-h-screen bg-gray-100">
      <div className="container mx-auto xl:px-20 p-4">
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h5 className="text-lg font-bold">My Orders</h5>
            <span className="text-gray-600">
              (<strong>{/* {cartData.length} */}</strong>) items
            </span>
          </div>

          <div className="md:px-4">
            <div className="overflow-x-auto">
              <div className="">
                {products.slice(1, 4).map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pt-4 pb-4"
                  >
                    <div>
                      <div className="flex float-end gap-2 text-custom-xs lg:text-base lg:mt-3 px-4">
                        <div className="w-1 h-1 lg:w-2 lg:h-2 mt-1 lg:mt-[5.3px] rounded-full bg-green-300 animate-ping"></div>
                        <h1 className="inline">Accepted</h1>
                      </div>
                    </div>
                    <div className="flex">
                      <div className=" p-1 w-20 md:w-28 lg:w-32 xl:p-4">
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
                        <div className="text-custom-xs lg:text-sm my-2">
                          <div className="font-semibold md:mb-1">
                            Size: {item.size}
                          </div>
                          <div className="font-semibold">
                            Color: {item.color}
                          </div>
                          <div className="font-semibold">
                            Date:{" "}
                            <span className="font-normal">09/13/2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders

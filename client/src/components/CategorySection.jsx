import React from 'react';
import OFTshirt1 from "../assets/OF-Tshirt1.png";
import OFTshirt2 from "../assets/OF-Tshirt2.png";
import OFTshirt3 from "../assets/OF-Tshirt3.png";
import OFTshirt4 from "../assets/OF-Tshirt4.png";
import jpeg1 from "../assets/jpeg1.jpg";

const products = [
  {
    id: 1,
    image: jpeg1,
    title: "KID'S",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 2,
    image: OFTshirt2,
    title: "MEN'S",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 3,
    image: OFTshirt3,
    title: "WOMEN'S",
    price: "$599",
    rating: 5.0,
  },
  {
    id: 4,
    image: OFTshirt4,
    title: "OTHER",
    price: "$599",
    rating: 5.0,
  },
];

const CategorySection = () => {
  return (
    <div className="items-center justify-center pb-20 text-center">
      <legend className='' data-wow-delay="100ms">SHOP BY CATEGORY</legend>
      <div className="flex flex-wrap justify-center gap-8 pt-8">
        {products.map(product => (
          <div key={product.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80">
              <img
                src={product.image}
                alt={`${product.title} image`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {product.title}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {product.price}
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Rating: {product.rating} / 5.0
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;

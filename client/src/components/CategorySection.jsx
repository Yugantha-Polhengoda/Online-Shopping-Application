import React from 'react';
import jpeg1 from "../assets/jpeg1.jpg";
import jpeg3 from "../assets/jpeg3.jpg";
import jpeg4 from "../assets/jpeg4.jpg";
import jpeg6 from "../assets/jpeg6.jpg";
import mensCategory from "../assets/mensCategory.jpg";
import womensCategory from "../assets/womensCategory.jpg";
import womens4 from "../assets/womens4.jpg";
import kids from "../assets/kids.jpg";
import others from "../assets/others.jpg";

const products = [
  {
    id: 1,
    image: kids,
    title: "KID'S",
    disciption: "Kid's clothings & Designs",
  },
  {
    id: 2,
    image: mensCategory,
    title: "MEN'S",
    disciption: "Men's clothings & Designs",
  },
  {
    id: 3,
    image: womensCategory,
    title: "WOMEN'S",
    disciption: "Women's clothings & Designs",
  },
  {
    id: 4,
    image: others,
    title: "OTHER",
    disciption: "Other clothings & Designs",
  },
];

const CategorySection = () => (
    <div className="flex flex-wrap gap-4 p-4">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );


const Card = ({ product }) => (
  <div className="product bg-slate-500 w-80 h-96 relative rounded-lg shadow-lg overflow-hidden m-9 md:m-5 lg:m-0 lg:w-58 lg:h-80 xl:m-2.5 xl:w-80 xl:h-96  2xl:ml-6">
    <div className="imgbox h-3/5">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-t-lg" />
    </div>
    <div className="absolute bottom-0 w-full bg-white  pl-4 pr-4 pt-2 pb-4">
      <h2 className='text-xl font-semibold'>{product.title}<br/><span className='text-sm text-slate-500'>{product.disciption}</span></h2>
      <a href='#' className='block mt-2 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600'>View</a>
    </div>
  </div>
);

export default CategorySection;

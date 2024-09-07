import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import { NavLink } from 'react-router-dom';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row mx-2.5 md:mx-10 gap-1 sm:gap-10 pt-36 lg:pt-28 pb-40 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Men'}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Women'}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Kids'}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Topwear'}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl gap-4 mb-4">
          <h2 className="">ALL COLLECTIONS</h2>
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6 md:gap-5">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              id={item._id}
              className="LatestProduct  bg-slate-500 w-full h-52  md:h-60  lg:h-80 xl:h-[350px] mt-3 relative rounded-lg overflow-hidden"
            >
              <NavLink to={`/product/${item._id}`}>
                <div className="imgbox h-3/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </NavLink>

              <div className="Latestdetails px-1.5 md:px-4 lg:px-2 xl:px-5 py-2 lg:py-2  bottom-[-98px] lg:bottom-[-165px] absolute bg-opacity-90">
                <div className="flex justify-between">
                  <div className="w-24 md:w-24 lg:w-[130px] xl:w-36 ">
                    <h2 className="text-custom-xs lg:text-sm font-semibold">
                      {item.name}
                    </h2>
                  </div>
                  <div className="Latestprice md:font-medium right-[6px] md:right-[18px] lg:right-[14px] text-custom-Sx lg:text-lg mt-2">
                    ${item.price}
                  </div>
                </div>
                <label className="block mt-1 lg:mt-2 text-custom-xs lg:text-sm font-medium">Available Sizes:</label>
                <ul className="flex space-x-2 list-none p-0 m-0">
                  <li className="bg-gray-300 rounded pt-0.5 px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">
                    S
                  </li>
                  <li className="bg-gray-300 rounded pt-0.5 px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">
                    M
                  </li>
                  <li className="bg-gray-300 rounded pt-0.5 px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">
                    L
                  </li>
                  <li className="bg-gray-300 rounded pt-0.5 px-1 lg:px-2 lg:py-1 hover:bg-gray-400 cursor-pointer text-custom-xs lg:text-base">
                    XL
                  </li>
                </ul>
                <label className="block mt-1 lg:mt-2 text-custom-xs lg:text-sm font-medium">Available Colors:</label>
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

                {/* <a
                  href="#"
                  className="block z-40 mt-2 lg:mt-3 bg-blue-500 text-white text-center text-custom-Sx lg:text-lg py-1 lg:py-0.5 rounded hover:bg-blue-600"
                >
                  Add To Cart
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

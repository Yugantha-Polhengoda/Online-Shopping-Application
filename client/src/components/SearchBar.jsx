import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import search_icon from '../assets/search_icon.png'
import cross_icon from '../assets/cross_icon.png'
import { NavLink, useLocation } from 'react-router-dom'
const SearchBar = () => {
    
    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();


    useEffect(()=> {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])

  return (

    <div>
      {
      showSearch && visible ? (
      <div className='fixed z-[999] flex lg:hidden justify-end right-0 text-center mt-20 lg:mt-0 py-2'>
          <div className='border-shadow items-center justtify-center border bg-white border-gray-400 px-4 rounded-full'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm mx-6 my-2.5' type="text" placeholder='Search'/>
            <img className='w-4 -mt-7' src={search_icon} alt='' />
          </div>
          <img onClick={()=>setShowSearch(false)} className=' w-3 h-3 my-4 mx-2 cursor-pointer' src={cross_icon} alt=''/>
      </div>
      ): null }

      <div className='hidden lg:flex justify-end right-0 text-center mt-20 lg:mt-0 py-2'>
        <NavLink to='/collection'>
          <div className='items-center justtify-center border border-gray-400 px-4 rounded-full'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm mx-6 my-2.5' type="text" placeholder='Search'/>
            <img className='w-4 -mt-11 py-4' src={search_icon} alt='' />
          </div>
        </NavLink>
        {/* <img onClick={()=>setShowSearch(false)} className=' w-3 h-3 my-4 mx-2 cursor-pointer' src={cross_icon} alt=''/> */}
      </div>
    </div>
  ) 
}

export default SearchBar

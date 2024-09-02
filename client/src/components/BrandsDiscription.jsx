// import React from 'react'

// import exchangeO from "../assets/exchangeO.png";
// import exchangeG from "../assets/exchangeG.png";
import exchangeB from "../assets/exchangeB.png";
// import starY from "../assets/starY.png";
// import starP from "../assets/starP.png";
import starR from "../assets/starR.png";
// import emblem from "../assets/emblem.png";

const BrandsDiscription = () => {
  return (
    <div className='text-center mx-auto pt-20 lg:px-5 2xl:px-28'>

        <div className='grid grid-cols-1 pb-4 md:grid-cols-3 2xl:grid-cols-3 2xl:px-24 bg-slate-800 lg:rounded-full lg:px-8 2xl:gap-40 2xl:rounded-full text-center  items-center justify-center'>
        <div className='text-center items-center justify-center'>
            <div className='h-22 2xl:w-full overflow-hidden text-center  items-center justify-center'>
              <img 
                src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBwOXYxaGR0d2w5cmx3a20xcGhnZXZzMThzamVnNHdtODFyZW02cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/EZpYPttGqutjKF3pAj/giphy.webp'
                className='w-32 mx-auto text-center self-center items-center justify-center'
                />
            </div>
              <h1 className='mt-3 text-center  text-white'>Free Shipping Islandwide</h1>
              <p className='text-slate-400 text-center '>Cash-on Dilevery within country</p>
          </div>

          <div className='mt-7'>
              <img 
                src={exchangeB}
                className='w-14 mx-auto'
                />
              <h1 className='mt-3 2xl: text-white'>Returns And Exchange</h1>
              <p className='text-slate-400'>We do exchanges within 7 days!</p>
          </div>

          <div className='mt-7'>
              <img 
                src={starR}
                className='w-14 mx-auto'
                />
              <h1 className='mt-3 2xl: text-white'>Guaranteed Quality</h1>
              <p className='text-slate-400'>Internationaly Certified Brands.</p>
          </div>

        </div>


      <h1 className="mb-4 mt-14 text-4xl font-serif font-semibold leading-none tracking-tight text-gray-900 md:p-1 md:text-5xl lg:text-6xl dark:text-white">We are a Premium Clothing Store</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
     
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
          </div>
        </div>
    </div>
  )
}

export default BrandsDiscription

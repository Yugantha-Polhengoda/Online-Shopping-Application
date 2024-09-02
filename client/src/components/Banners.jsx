import React from 'react'
import jpeg3 from "../assets/banner2.jpg";
import jpeg4 from "../assets/Banner.jpg";
import jpeg6 from "../assets/Banner4.jpg";

const Banners = () => {
  return (
    <div className='h-96 px-10'>

        <div className='flex gap-3 h-full w-full overflow-hidden'>
            <div className='h-full w-96 bg-black'>
                <img src={jpeg6} />
            </div>
            <div className='grid gap-3 w-96 overflow-hidden'>
                <div className=' bg-amber-300 '>
                    <img src={jpeg3} className='h-full w-full object-cover' />
                </div>

                <div className=' bg-lime-600'>
                    <img src={jpeg4} className='h-full w-full object-cover' />
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Banners

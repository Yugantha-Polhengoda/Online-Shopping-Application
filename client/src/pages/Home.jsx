import React from 'react'
import Offers from '../components/Offers'
import ShirtCustomizer from './ShirtCustomizer'
import NavBar from '../components/NavBar'
import Trending from '../components/Trending'
import Footer from '../components/Footer'
import BrandsDiscription from '../components/BrandsDiscription'
import ContactModel from '../components/ContactModel'
import CategorySection from '../components/CategorySection'
import Testing from '../components/Testing'
import ServiceCards from '../components/ServiceCards'
import Banners from '../components/Banners'
import LatestCollections from '../components/LatestCollections'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        {/* <div className='bg-slate-900'> */}
        
        <BrandsDiscription />

        
        
        <div className="items-center justify-center pt-20 px-8">
        <div className='text-center py-4 text-xl'>
          <h1 className='text-gray-600'>SPECIAL OFFERS</h1>
          <p className='text-gray-600 m-auto w-3/4 text-xs sm:text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
          <Offers />
        </div>
        
        {/* <div className="items-center justify-center pt-20 pb-14 px-8">
          <legend className='text-center' data-wow-delay="100ms">TRENDING & NEW ARRIVALS</legend>
          <Trending />
        </div> */}

        <div className='sm:pt-8'>
          <LatestCollections />
        </div>

        <div className="items-center justify-center sm:pt-16 pb-40 text-center">
        <div className='text-center py-4 text-xl'>
          <h1 className='text-gray-600'>SHOP BY CATEGORY</h1>
          <p className='text-gray-600 m-auto w-3/4 text-xs sm:text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
          <legend className='text-center' data-wow-delay="100ms"></legend>
          <CategorySection />
        </div>

        {/* <ContactModel /> */}

        {/* <div className='px-80 py-20 '>
          <Banners />
        </div> */}

        {/* </div> */}
        <Footer />
    </div>
  )
}

export default Home

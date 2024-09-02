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

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        {/* <div className='bg-slate-900'> */}
        
        <BrandsDiscription />

        
        
        <div className="items-center justify-center pt-20 pb-14 px-8">
          <legend className='text-center' data-wow-delay="100ms">SPECIAL OFFERS</legend>
          <Offers />
        </div>
        
        <div className="items-center justify-center pt-20 pb-14 px-8">
          <legend className='text-center' data-wow-delay="100ms">TRENDING & NEW ARRIVALS</legend>
          <Trending />
        </div>

        <div className="items-center justify-center pt-20 pb-14 text-center">
          <legend className='text-center' data-wow-delay="100ms">SHOP BY CATEGORY</legend>
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

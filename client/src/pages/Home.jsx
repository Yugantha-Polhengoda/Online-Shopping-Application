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

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        {/* <div className='bg-black'> */}
        <BrandsDiscription />
        
        <div className="items-center justify-center pt-20 pb-20">
          <legend className='text-center' data-wow-delay="100ms">SPECIAL OFFERS</legend>

          <Offers />
        </div>
        
        <div className="items-center justify-center pt-20 pb-20 ">
          <legend className='text-center' data-wow-delay="100ms">TRENDING & NEW ARRIVALS</legend>

          <Trending />
        </div>
      
        {/* <CategorySection /> */}
        {/* <ContactModel /> */}
        
        {/* </div> */}
        <Footer />
    </div>
  )
}

export default Home

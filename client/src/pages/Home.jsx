import React from 'react'
import Offers from '../components/Offers'
import ShirtCustomizer from './ShirtCustomizer'
import NavBar from '../components/NavBar'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        {/* <div className='bg-black'> */}
        <Offers />
        <Trending />
        {/* </div> */}
        <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Offers from '../components/Offers'
import ShirtCustomizer from './ShirtCustomizer'
import NavBar from '../components/NavBar'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        <Offers />
        <Trending />
    </div>
  )
}

export default Home

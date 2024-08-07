import React from 'react'
import Content from '../components/Content'
import ShirtCustomizer from './ShirtCustomizer'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <ShirtCustomizer />
        <Content />
    </div>
  )
}

export default Home

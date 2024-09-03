import React from "react"
import {Routes, Route} from "react-router-dom"

// import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
    </main>
  )
}

export default App

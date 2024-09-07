import React from "react"
import {Routes, Route} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Collection from "./pages/Collection"
import ScrollToTop from "./components/ScrollToTop"
import SearchBar from "./components/SearchBar"


function App() {

  return (
    <main>
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/collection" element={<Collection/>} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App

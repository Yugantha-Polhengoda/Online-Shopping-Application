import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import ScrollToTop from "./components/ScrollToTop";
import SearchBar from "./components/SearchBar";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <main>
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      {/* Hide SearchBar on large screens */}
      <div className="lg:hidden">
        <SearchBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

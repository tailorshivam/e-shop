import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
//import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Checkout from "./pages/Checkout";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import './styles/custom.css';
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
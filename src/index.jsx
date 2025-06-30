import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </AuthProvider>

);
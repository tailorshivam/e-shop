import React, { createContext, useState, useEffect } from "react";

// 🧪 Create the context
export const CartContext = createContext();

// 🧙 Provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 🧠 Load cart from localStorage on app start
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // 💾 Save cart to localStorage on every update
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✨ Core Cart Actions
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
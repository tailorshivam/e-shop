import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
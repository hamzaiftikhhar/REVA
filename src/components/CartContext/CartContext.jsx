// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists using BOTH id and any other unique identifiers
      const existingItemIndex = prevItems.findIndex(item => 
        item.id === product.id && item.title === product.title
      );
      
      if (existingItemIndex !== -1) {
        // Create a new array with updated quantity for existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        return newItems;
      }

      // Add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, productTitle) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === productId && item.title === productTitle)
      )
    );
  };

  const updateQuantity = (productId, productTitle, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, productTitle);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        (item.id === productId && item.title === productTitle)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
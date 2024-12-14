// src/components/ProductCard/ProductCard.jsx
import React from "react";
import "./ProductCard.css";
import { useCart } from "../CartContext/CartContext";

const ProductCard = ({ id, image, title, price, onDetailsClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      price,
    });
  };

  return (
    <div className="product-card-custom">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="icon-overlay">
          <button onClick={onDetailsClick} className="details-button">
            <span className="material-icons">search</span>
          </button>
          <button onClick={handleAddToCart} className="cart-button">
            <span className="material-icons">shopping_cart</span>
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="primaryText">{title}</h3>
        <p className="secondaryText">
          <span className="orangeText">$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
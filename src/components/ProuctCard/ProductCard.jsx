import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price, onDetailsClick, onAddToCart }) => {
  return (
    <div className="product-card-custom">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="icon-overlay">
          <button onClick={onDetailsClick} className="details-button">
            <span className="material-icons">search</span>
          </button>
          <button onClick={onAddToCart} className="cart-button">
            <span className="material-icons">shopping_cart</span>
          </button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="primaryText">{title}</h3>
        <p className="secondaryText"><span className="orangeText">$</span>
          {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

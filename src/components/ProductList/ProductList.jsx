import React, { useState } from "react";
import ProductCard from "../ProuctCard/ProductCard";
import products from "../../utils/products.json";
import "./ProductList.css"; // Importing the styles

const ProductList = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
  const [showMore, setShowMore] = useState(true); // To toggle Show More/Show Less

  const handleDetailsClick = (product) => {
    console.log(product);
    alert(`Details: ${product.description}`);
  };

  const handleAddToCart = (product) => {
    alert(`${product.title} added to cart!`);
  };

  const toggleItems = () => {
    if (showMore) {
      setVisibleItems(products.length); // Show all items
    } else {
      setVisibleItems(4); // Show only 4 items
    }
    setShowMore(!showMore); // Toggle the button state
  };

  return (
    <div className="product-list-container">
              <div className="primaryText">Hot Deals</div>

      <div className="product-list">
        {products.slice(0, visibleItems).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onDetailsClick={() => handleDetailsClick(product)}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <button className="show-more-button" onClick={toggleItems}>
        {showMore ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default ProductList;

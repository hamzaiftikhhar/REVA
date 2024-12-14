
import React from "react";
import ProductCard from "../ProuctCard/ProductCard";

const TestComponent = () => (

  <ProductCard
    image="/images/card-image3.jpg"
    title="Test Product"
    price="100"
    onDetailsClick={() => alert("Details clicked!")}
    onAddToCart={() => alert("Added to cart!")}
  />
);

export default TestComponent;

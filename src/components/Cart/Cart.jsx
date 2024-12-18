// src/components/Cart/Cart.jsx
import React from 'react';
import { Heart, Trash2 } from 'lucide-react';
import './Cart.css';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    return 200; // Example discount
  };

  return (
    <div className="cart-wrapper paddings innerWidth">
      <h1 className="primaryText">Cart ({cartItems.length} items)</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${item.title}-${index}`} className="cart-item">
              <Trash2 
                className="delete-icon" 
                onClick={() => removeFromCart(item.id, item.title)}
              />
              <img src={item.image} alt={item.title} />
              
              <div className="item-details">
                <h3 className="primaryText">{item.title}</h3>
                <p className="secondaryText">Price: ${item.price}</p>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.title, item.quantity - 1)}
                    className="button"
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.title, item.quantity + 1)}
                    className="button"
                  >+</button>
                </div>
              </div>
              
              <Heart className="heart-icon" />
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="empty-cart">
              <p className="secondaryText">Your cart is empty</p>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-details">
              <h2>Summary</h2>
              <div className="summary-row">
                <span>Sub-total:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Discount:</span>
                <span>-${calculateDiscount()}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Delivery & Handling:</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${(calculateSubtotal() - calculateDiscount()).toFixed(2)}</span>
              </div>
              <div className="savings">
                You saved ${calculateDiscount()}
              </div>
              <button className="button">Place Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
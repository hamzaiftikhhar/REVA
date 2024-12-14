import React from "react";
import "./MainFooter.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Welcome to our e-commerce platform. We offer the best products to
            meet your needs, with a commitment to quality and customer
            satisfaction.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-section services">
          <h2>Services</h2>
          <ul>
            <li><a href="#">Product Delivery</a></li>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Warranty Services</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section address">
          <h2>Contact Us</h2>
          <p>123 E-commerce Street, Online City, World</p>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Column 4 */}
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;

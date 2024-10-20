import './Header.css'
import '../../index.css'; // Going up two levels to access index.css
import React from "react";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth ">
        <img src="/logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          
          <button className="button" >
          <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

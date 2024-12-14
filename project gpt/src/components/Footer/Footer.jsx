import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="innerWidth flexCenter paddings f-container">
        <div className="f-left flexColStart">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our Vision is to make the palces <br />
            feel like home
          </span>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Defence Road,Lahore,FL 45 6722,Pak</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Our Value</span>
            <span>Contact Us</span>
            <span>Get Started</span>
            <span>Contact</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Footer;

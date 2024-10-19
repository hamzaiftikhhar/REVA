import React from "react";
import "./Hero.css";
import "../../index.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart left-hero">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart hero-dec">
            <span className="secondaryText">Find a variety of properties that suits you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you </span>
          </div>
          
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="search" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter2 stat">
            <div className="flexColCenter stat">
                <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
                    </span>
                    <span className="secondaryText">
                        Premium Products
                    </span>
                    <span >
                        
                    </span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp start={1800} end={2000} duration={4} />
                <span>+</span>
                    </span>
                    <span className="secondaryText">
                        Happy Customers
                    </span>
            </div>
            <div className="flexColCenter stat">
                <span>
                <CountUp start={10} end={28} duration={4} />
                <span>+</span>
                    </span>
                    <span className="secondaryText">
                        Award Winning
                    </span>
            </div>
          </div>
        </div>
        <div className="right-hero">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;

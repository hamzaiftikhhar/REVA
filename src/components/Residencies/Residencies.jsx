import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { color } from "framer-motion";

const Resensidencies = () => {
  return(
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper>
          {
            data.map((card,i)=>(
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="nothing" />
                  <span className="secondaryText r-price">
                    <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                  
                </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
      </div>
    </section>
  ) 
};

export default Resensidencies;

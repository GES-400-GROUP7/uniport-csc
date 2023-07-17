import React from "react";

// stylsheet
import "../../style/Hero.scss";

// react icons
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner_hero">
        <h4>WELCOME TO COMPUTER SCIENCE DEPARTMENT </h4>
        <h1>Networking the World,</h1>
        <span>Enabling Futures.</span>
        <div className="hero_arrows">
          <TfiArrowCircleLeft/>
          <TfiArrowCircleRight/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illum
          ullam sunt sapiente, sint modi maiores quidem nesciunt dignissimos
          nemo ut, aspernatur repudiandae libero delectus labore omnis
          doloremque. Maiores, dignissimos!. Lorem, ipsum dolor.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <h1>
          Order your <br /> favourite food here
        </h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisty your cravings and make your dining experience,
          one delicious meal at time.
        </p>
        <button>view more</button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/211188_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to the Trail Riders Community</h1>
        <p>Join us for amazing rides and unforgettable experiences</p>
        <a href="#events" className="hero-btn">Explore Events</a>
      </div>
    </section>
  );
};

export default HeroSection;
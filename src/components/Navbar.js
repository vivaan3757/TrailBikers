import React from "react";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Trail Riders</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#rides">Rides</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <a href="#login" className="login-btn">Login</a>
        <a href="#signup" className="signup-btn">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
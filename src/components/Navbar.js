import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check login state

  const handleNavClick = (section) => {
    navigate("/"); // ✅ First, navigate to home
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 50); // ✅ Delay to ensure home loads first
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.reload(); // Refresh to update UI
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>Trail Riders</div>
      <ul className="nav-links">
        <li><span onClick={() => handleNavClick("hero")}>Home</span></li>
        <li><span onClick={() => handleNavClick("events")}>Events</span></li>
        <li><span onClick={() => handleNavClick("rides")}>Rides</span></li>
        <li><span onClick={() => handleNavClick("blogs")}>Blogs</span></li>
        <li><span onClick={() => handleNavClick("gallery")}>Gallery</span></li>
        <li><span onClick={() => handleNavClick("shop")}>Shop</span></li>
        <li><span onClick={() => handleNavClick("contact")}>Contact</span></li>
      </ul>
      <div className="auth-buttons">
        {token ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <>
            <button onClick={() => navigate("/login")} className="login-btn">Login</button>
            <button onClick={() => navigate("/signup")} className="signup-btn">Signup</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Rides from "./components/Rides";
import Blogs from "./components/Blogs";
import Gallery from "./components/Gallery";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JoinRide from "./pages/JoinRide"; // New page for joining rides
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./styles/App.css";

function App() {
  const token = localStorage.getItem("token"); // Check login state

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <section id="events"><Events /></section>
              <section id="rides"><Rides /></section>
              <section id="blogs"><Blogs /></section>
              <section id="gallery"><Gallery /></section>
              <section id="shop"><Shop /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />
        <Route path="/join-ride/:id" element={<JoinRide />} />
        <Route path="/signup" element={token ? <Navigate to="/" /> : <Signup />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

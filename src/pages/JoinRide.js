import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JoinRide.css";

const JoinRide = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    instaId: "",
    vehicleModel: "",
    vehicleNumber: "",
    address: "",
  });

  const [phoneError, setPhoneError] = useState(""); // State for phone validation error
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone Number Validation
    if (name === "phone") {
      if (!/^\d{10}$/.test(value)) {
        setPhoneError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneError(""); // Clear error if valid
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final Phone Validation before submission
    if (!/^\d{10}$/.test(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Your ride registration is submitted!");

    // Redirect to landing page after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="join-ride-container">
      <form className="join-ride-form" onSubmit={handleSubmit}>
        <h2>Join the Ride</h2>

        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />

        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        {phoneError && <p className="error">{phoneError}</p>} {/* Show error if invalid */}

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="instaId" placeholder="Instagram ID (Optional)" value={formData.instaId} onChange={handleChange} />
        <input type="text" name="vehicleModel" placeholder="Vehicle Model" value={formData.vehicleModel} onChange={handleChange} required />
        <input type="text" name="vehicleNumber" placeholder="Vehicle Number" value={formData.vehicleNumber} onChange={handleChange} required />
                <input
                  type="text"
                  name="numberOfPersonsJoining"
                  placeholder="Number of Persons Joining"
                  value={formData.numberOfPersonsJoining}
                  onChange={handleChange}
                  required
                />

        <button type="submit" disabled={phoneError}>Submit</button> {/* Disable if phone is invalid */}
      </form>
    </div>
  );
};

export default JoinRide;

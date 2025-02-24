import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/Contact.css"; // Importing the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Your query has been submitted. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-grid">
        {/* Query Form - Left Side */}
        <div className="contact-form">
          <h3 className="form-title">Send us a message</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {message && <p className="success-message">{message}</p>}
        </div>

        {/* Contact Details - Right Side */}
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>

          <div className="info-item">
            <FaMapMarkerAlt className="icon location" />
            <p>Brookfield, Bangalore 560037</p>
          </div>

          <div className="info-item">
            <FaPhone className="icon phone" />
            <p>+91 7259770330</p>
          </div>

          <div className="info-item">
            <FaWhatsapp className="icon whatsapp" />
            <p>+91 7259770330</p>
          </div>

          <div className="info-item">
            <FaInstagram className="icon instagram" />
            <p>@trailriders.in</p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon email" />
            <p>bikers@trailriders.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

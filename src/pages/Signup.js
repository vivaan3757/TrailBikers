import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"; // Import styles for better UI

//const API_URL = process.env.REACT_APP_API_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Signup Form Loaded");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      alert(response.data.message || "Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <Paper elevation={3} className="signup-form">
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField name="name" label="Name" fullWidth value={formData.name} onChange={handleChange} required />
            <TextField name="email" label="Email" fullWidth value={formData.email} onChange={handleChange} required />
            <TextField name="phone" label="Phone" fullWidth value={formData.phone} onChange={handleChange} required />
            <TextField name="password" label="Password" type="password" fullWidth value={formData.password} onChange={handleChange} required />
            <TextField name="confirmPassword" label="Confirm Password" type="password" fullWidth value={formData.confirmPassword} onChange={handleChange} required />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Box>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: 10 }}>
          Already have an account? <span className="auth-link" onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#007bff", fontWeight: "bold" }}>Login here</span>
        </Typography>
      </Paper>
    </div>
  );
};

export default Signup;

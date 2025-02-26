import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import CSS for better centering

//const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formData);

    if (response.data.token) {  // Ensure token is received
      localStorage.setItem("token", response.data.token); // ✅ Save token to localStorage
      alert(response.data.message || "Login successful!");
      navigate("/"); // Redirect after successful login
      window.location.reload(); // ✅ Ensure Navbar updates
    } else {
      alert("Login failed: No token received.");
    }
  } catch (error) {
    alert(error.response?.data?.error || "Login failed. Try again.");
  }
};


  return (
    <Box className="login-container">
      <Paper elevation={3} className="login-form">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField name="email" label="Email" fullWidth onChange={handleChange} required />
            <TextField name="password" label="Password" type="password" fullWidth onChange={handleChange} required />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;

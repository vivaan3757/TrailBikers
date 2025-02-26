const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
//app.use(cors());
app.use(cors({
  origin: "https://trailriders.in",  // Allow only your frontend
  credentials: true
}));

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

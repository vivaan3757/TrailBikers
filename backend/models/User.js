const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

const createUser = async (name, email, phone, passwordHash) => {
  const newUser = new User({ name, email, phone, password: passwordHash });
  return await newUser.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = { createUser, findUserByEmail };

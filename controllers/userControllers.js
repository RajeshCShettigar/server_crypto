const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;
  
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password
    });
    if (user) {
      res.status(201).json({
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  });

//login authentication for a user
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    console.log(user);
    if (user && (user.password===password)) {
      res.json({
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });
  
  module.exports = {registerUser, authUser };
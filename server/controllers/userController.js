const user = require("../models/userModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({
      message:"user registered"
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const existingUser = await user.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      return res.status(404).json({message:"User Not Found"});
    }
    
    const isMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password,
    );

    if (!isMatch) {
      return res.status(401).send("Invalid Password");
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        role: existingUser.role,
        name: existingUser.name
      },
      "mysecretekey",
    );
    res.json({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { registerUser, loginUser };

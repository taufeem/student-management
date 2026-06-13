const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("DB connected"));
  } catch (err) {
    console.log("DB Connection Failed:", err);
  }
};

module.exports = connection;

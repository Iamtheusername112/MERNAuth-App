const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Databse successfully");
  } catch (error) {
    console.error("Failed to connect to Database:", error);
  }
};

module.exports = connectDB;

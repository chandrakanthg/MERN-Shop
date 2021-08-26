require("dotenv").config;
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user123:user123@cluster0.gf3tk.mongodb.net/shop?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connection success");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;

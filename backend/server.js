require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
app.use(express.json());
app.use("/api/products", productRoutes);
connectDB();
const PORT = 3001;
app.listen(PORT, () => console.log("server running"));

// const server = require("http").createServer();
// const port = process.env.PORT || 3000;

// server.listen(port, () => console.log(`Listening on ${port}`));

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log("server running in " + NODE_ENV + " successfully on port " + PORT)
);

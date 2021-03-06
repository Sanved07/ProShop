import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log("server running in " + NODE_ENV + " successfully on port " + PORT)
);

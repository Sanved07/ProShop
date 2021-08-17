import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
// We are not actually calling /api/products/ it is called by actions of the productActions
// Go to App see the Routes HomeScreen see the functions like dispatch selector reducer store and actions are called
// productActions are calling /api/products
// GET all products
// GET /api/products/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET products by id
// 
// GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProductById, getProducts };

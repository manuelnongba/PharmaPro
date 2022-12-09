const express = require("express");
const {
  addProduct,
  getProducts,
  search,
} = require("../controllers/productController");

const router = express.Router();

router.get("/api/products", getProducts);

router.post("/api/product", addProduct);

router.get("/api/searchproduct/:name", search);

module.exports = router;

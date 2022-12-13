const express = require("express");
const {
  addProduct,
  getProducts,
  search,
  addTransactions,
  getTransactions,
} = require("../controllers/productController");

const router = express.Router();

router.get("/api/products", getProducts);

router.post("/api/product", addProduct);

router.get("/api/searchproduct/:name", search);

router.post("/api/transactions", addTransactions);

router.get("/api/gettransactions", getTransactions);

module.exports = router;

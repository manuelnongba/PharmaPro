const express = require('express');
const {
  addProduct,
  getProducts,
  search,
  addTransactions,
  getTransactions,
  currentTransaction,
  getCurrentTransactions,
  deleteCurrentTransaction,
  deleteAllCurrentTransactions,
} = require('../controllers/productController');

const router = express.Router();

router.get('/api/products', getProducts);

router.post('/api/product', addProduct);

router.get('/api/searchproduct/:name', search);

router.post('/api/transactions', addTransactions);

router.get('/api/gettransactions', getTransactions);

router.post('/api/current-transaction', currentTransaction);

router.get('/api/get-current-transactions', getCurrentTransactions);

router.delete('/api/delete-transaction/:id', deleteCurrentTransaction);

router.delete(
  '/api/delete-all-current-transactions',
  deleteAllCurrentTransactions
);

router.get;

module.exports = router;

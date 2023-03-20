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
  updateStock,
  expiredProducts,
} = require('../controllers/productController');

const router = express.Router();

router.get('/api/products', getProducts);
router.get('/api/searchproduct/:name', search);
router.get('/api/gettransactions', getTransactions);
router.get('/api/get-current-transactions', getCurrentTransactions);
router.get('/api/expiredproducts', expiredProducts);

router.post('/api/product', addProduct);
router.post('/api/transactions', addTransactions);
router.post('/api/current-transaction', currentTransaction);

router.patch('/api/updatestock/:name/:quantity', updateStock);

router.delete('/api/delete-transaction/:id', deleteCurrentTransaction);
router.delete(
  '/api/delete-all-current-transactions',
  deleteAllCurrentTransactions
);

router.get;

module.exports = router;

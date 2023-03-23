const CurrentTransactions = require('../models/currentTransactionsModel');
const Product = require('../models/productModel');
const Transactions = require('../models/transactionsModel');

exports.addProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      message: 'success',
      product: newProduct,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    message: 'success',
    products,
  });
};

exports.updateStock = async (req, res) => {
  const product = await Product.updateOne(
    { name: req.params.name, stockCount: { $gt: 0 } },
    {
      $inc: {
        stockCount: -req.params.quantity,
      },
    }
  );

  res.status(200).json({
    message: 'success',
    products: product,
  });
};

exports.expiredProducts = async (req, res) => {
  const expiredProducts = await Product.find({
    expiryDate: { $lte: new Date() },
  });

  res.status(200).json({
    message: 'success',
    expiredProducts,
  });
};

exports.search = async (req, res, next) => {
  const { name } = req.params;

  const productList = await Product.find({ name: new RegExp(`^${name}`) });

  if (!productList) throw new Error('Not found');

  res.status(200).json({
    message: 'success',
    productList,
  });
};

exports.addTransactions = async (req, res, next) => {
  const transaction = await Transactions.create(req.body);

  res.status(200).json({
    message: 'success',
    transaction,
  });
};

exports.getTransactions = async (req, res, next) => {
  const transactions = await Transactions.find();

  res.status(200).json({
    message: 'success',
    transactions,
  });
};

exports.currentTransaction = async (req, res, next) => {
  const currentTransaction = await CurrentTransactions.create(req.body);

  res.status(200).json({
    message: 'success',
    currentTransaction,
  });
};

exports.getCurrentTransactions = async (req, res, next) => {
  const currentTransactions = await CurrentTransactions.find();

  res.status(200).json({
    message: 'success',
    currentTransactions,
  });
};

exports.deleteCurrentTransaction = async (req, res, next) => {
  const result = await CurrentTransactions.deleteOne({ _id: req.params.id });

  res.status(204).json({
    status: 'success',
    data: result,
  });
};

exports.deleteAllCurrentTransactions = async (req, res, next) => {
  const result = await CurrentTransactions.deleteMany({});

  res.status(204).json({
    status: 'success',
    data: result,
  });
};

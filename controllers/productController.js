const Product = require("../models/productModel");
const Transactions = require("../models/transactionsModel");

exports.addProduct = async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(200).json({
    message: "success",

    product: newProduct,
  });
};

exports.addTransactions = async (req, res, next) => {
  const transaction = await Transactions.create(req.body);

  res.status(200).json({
    message: "success",
    transaction,
  });
};

exports.getTransactions = async (req, res, next) => {
  const transactions = await Transactions.find();

  res.status(200).json({
    message: "success",
    transactions,
  });
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    message: "success",
    products,
  });
};

exports.search = async (req, res, next) => {
  const { name } = req.params;

  const productList = await Product.find({ name: new RegExp(`^${name}`) });

  if (!productList) throw new Error("Not found");

  res.status(200).json({
    message: "success",
    productList,
  });
};

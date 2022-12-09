const Product = require("../models/productModel");

exports.addProduct = async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(200).json({
    message: "success",
    data: {
      product: newProduct,
    },
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

  const product = await Product.find({ name: new RegExp(`^${name}`) });

  if (!product) throw new Error("Not found");

  res.status(200).json({
    message: "success",
    product,
  });
};

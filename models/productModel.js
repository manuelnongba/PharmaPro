const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the drug's name"],
    unique: true,
  },
  price: {
    type: Number,
    require: [true, "Please provide a price"],
  },
  dosage: {
    type: Number,
    require: [true, "Please provide a dosage"],
  },
  frequency: {
    type: String,
  },
  unit: {
    type: String,
    enum: ["mg", "g", "ml", "l"],
    default: "mg",
    require: [true, "Please provide a unit"],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

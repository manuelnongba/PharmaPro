const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the drug's name"],
  },
  quantity: {
    type: Number,
    require: [true, "Please provide a dosage"],
  },
  sales: {
    type: Number,
    require: [true, "Please provide a price"],
  },
});

const Transactions = mongoose.model("Transactions", TransactionsSchema);

module.exports = Transactions;

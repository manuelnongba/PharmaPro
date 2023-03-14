const mongoose = require('mongoose');

const CurrentTransactionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the drug's name"],
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide a dosage'],
  },
  sales: {
    type: Number,
    required: [true, 'Please provide a price'],
  },
});

const CurrentTransactions = mongoose.model(
  'Current Transactions',
  CurrentTransactionsSchema
);

module.exports = CurrentTransactions;

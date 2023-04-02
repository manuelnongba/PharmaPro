const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = User.create(req.body);

    res.status(200).json({
      message: 'success',
      newUser,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
};

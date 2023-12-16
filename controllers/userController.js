const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({
      message: 'success',
      newUser,
    });
  } catch (err) {
    res.status(401).json({
      status: 'error',
      message: err.message,
    });
  }
};

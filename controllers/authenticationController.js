const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const signToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

// exports.home = async (req, res, next) => {
//   res.send("Arrived");
// };

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error('Please provide email and password', 400);
    }

    const user = await User.findOne({ username });

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error('Incorrect username or password');
    }

    const token = signToken(user._id, user.role);

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      secure: true,
      httpOnly: true,
    };

    res.cookie('jwt', token, cookieOptions);

    const { _id, role } = user;

    res.status(200).json({
      status: 'success',
      token,
      user: { _id, role },
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }
      res.status(200).json({
        user: currentUser,
      });
      next();
    } catch (err) {
      next();
    }
  }

  next();
};

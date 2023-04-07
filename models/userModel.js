const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  username: {
    type: String,
    required: [true, 'Please provide your username'],
    unique: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ['attendant', 'admin'],
    default: 'attendant',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  //hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete password field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// userSchema.methods.correctPassword = function (candidatePasword) {
//   return this.password === candidatePasword;
// };

const User = mongoose.model('User', userSchema);

module.exports = User;

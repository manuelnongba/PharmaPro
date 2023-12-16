const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/userModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => console.log('DB successfully connected!'));

//READ JSON FILE
const users = JSON.parse(fs.readFileSync('./dev-data/users.json', 'utf-8'));
console.log(process.argv);

//Import data into database
const importData = async (users) => {
  try {
    await User.create(users);
    console.log('Users successfully imported');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete all data from DB
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Users successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData(users);
} else if (process.argv[2] === '--delete') {
  deleteData();
}

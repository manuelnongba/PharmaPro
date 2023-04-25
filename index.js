const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/productRoutes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use(cookieParser());

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

app.use('/', userRouter);

app.use('/', productRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

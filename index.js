const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/productRoutes");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from the middleware");
  next();
});

app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies.jwt);
  next();
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => console.log("DB successfully connected!"));

app.use("/", userRouter);

app.use("/", productRouter);

const port = 8000;
app.listen(port, () => {
  console.log("App running on port 8000");
});

const express = require("express");
const { login } = require("../controllers/authentication");

const router = express.Router();

router.route("/").post(login);

module.exports = router;

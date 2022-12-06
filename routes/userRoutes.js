const express = require("express");
const { login, cookie } = require("../controllers/authentication");

const router = express.Router();

// router.route("/").get(home);

router.route("/api/cookie").get(cookie);

router.route("/api/login").post(login);

module.exports = router;

const express = require("express");
const { login, isLoggedIn } = require("../controllers/authentication");

const router = express.Router();

// router.route("/").get(home);

router.route("/api/user").get(isLoggedIn);

router.route("/api/login").post(login);

module.exports = router;

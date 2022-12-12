const express = require("express");
const { login, isLoggedIn, logout } = require("../controllers/authentication");

const router = express.Router();

// router.route("/").get(home);

router.route("/api/user").get(isLoggedIn);

router.route("/api/login").post(login);

router.get("/api/logout", logout);

module.exports = router;

const express = require("express");
const router = express.Router();
const { Signup, Login, GetUser, OAuth } = require("../controllers/authController")

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/oauth", OAuth)
router.get("/getuser", GetUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const { Signup, Login, GetUser } = require("../controllers/authController")

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/getuser", GetUser);

module.exports = router;
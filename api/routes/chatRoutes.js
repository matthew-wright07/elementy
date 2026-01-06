const express = require("express");
const router = express.Router();
const { OpenAI } = require("../controllers/chatController")

router.post("/openai", OpenAI);

module.exports = router;
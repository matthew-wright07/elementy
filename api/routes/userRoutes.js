const express = require("express");
const router = express.Router();
const { AddSave } = require("../controllers/userController");

router.post("/addsave", AddSave);

module.exports = router;
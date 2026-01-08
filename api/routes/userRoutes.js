const express = require("express");
const router = express.Router();
const { AddSave, DeleteSave } = require("../controllers/userController");

router.post("/addsave", AddSave);
router.post("/deletesave", DeleteSave)

module.exports = router;
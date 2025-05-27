const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");

router.get("/", submitContact);
// router.post("/", submitContact);

module.exports = router;

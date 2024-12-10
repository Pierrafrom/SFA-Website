"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("arrosage");
});

module.exports = router;

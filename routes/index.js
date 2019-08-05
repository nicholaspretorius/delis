const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("hello");
  //res.send("Hello");
});

module.exports = router;

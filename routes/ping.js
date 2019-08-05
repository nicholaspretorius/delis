const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ hello: "world!" });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;

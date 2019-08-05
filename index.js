const express = require("express");
const app = express();

const PORT = NODE_ENV.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send({ hello: "world!" });
});

app.listen(PORT);

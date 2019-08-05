const express = require("express");
const app = express();

require("./start/db")();
require("./start/routes")(app);

const PORT = process.env.PORT || 7777;

app.listen(PORT, console.log(`Server running on ${PORT}...`));

const mongoose = require("mongoose");
require("dotenv").config({ path: "vars.env" });

module.exports = () => {
  const db = process.env.DB;
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log(`Connected to MongoDB...`))
    .catch(err => console.log(err));
};

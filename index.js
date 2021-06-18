const express = require("express");
const app = express();

require("dotenv").config();

require("./startup/db")(app);
require("./startup/routes")(app);

app.get("/", (req, res) => {
  res.send("This my app");
});

const port = process.env.PORT || 5000;

module.exports = app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

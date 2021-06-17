const express = require("express");
const app = express();

require("dotenv").config();
require("./startup/routes")(app);
require("./startup/db")(app);

const port = process.env.PORT || 5000;

module.exports = app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

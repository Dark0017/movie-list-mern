const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect(`${process.env.MONGODB_CONN_STRING}/movie`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() =>
      console.log(`connected to ${process.env.MONGODB_CONN_STRING} db`)
    )
    .catch((error) => console.log(`Connection to mongoDB failed`, error));
};

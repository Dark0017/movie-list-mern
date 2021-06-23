const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_CONN_STRING}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(
        `connected to ${process.env.MONGODB_CONN_STRING} db`
      );
    })
    .catch((error) => console.log(`Connection to mongoDB failed`, error));
};

exports.db = dbConnect;

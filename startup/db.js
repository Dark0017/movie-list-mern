const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");

let gfStream;

const initGfStream = (conn, gfs) => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
};

const dbConnect = async (app) => {
  await mongoose
    .connect(`${process.env.MONGODB_CONN_STRING}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(`connected to ${process.env.MONGODB_CONN_STRING} db`);
    })
    .catch((error) => console.log(`Connection to mongoDB failed`, error));

  let conn = mongoose.connection;
  initGfStream(conn, gfStream);

  // const storage = new GridFsStorage({
  //   url: process.env.MONGODB_CONN_STRING,
  //   file: (req, file) => {
  //     return new Promise((resolve, reject) => {
  //       crypto.randomBytes(16, (err, buf) => {
  //         if (err) {
  //           return reject(err);
  //         }
  //         const filename =
  //           buf.toString("hex") + path.extname(file.originalname);
  //         const fileInfo = {
  //           filename: filename,
  //           bucketName: "thumbnails",
  //         };
  //         resolve(fileInfo);
  //       });
  //     });
  //   },
  // });

  // return multer({ storage });
};

exports.db = dbConnect;

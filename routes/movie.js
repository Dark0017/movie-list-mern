const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const { Movie, validateMovie, pickMovieData } = require("../models/Movie");
const upload = require("../middlewares/upload");
//
const conn = mongoose.connection;

// Init gfs
let gfs;

conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("files");
});
//Create
router.post(
  "/",
  upload.fields([
    { name: "name" },
    { name: "year" },
    { name: "language" },
    { name: "thumbNail" },
    { name: "video" },
  ]),
  async (req, res) => {
    let movie = pickMovieData(req.body);

    movie.thumbNail = `${req.files.thumbNail[0].id}`;
    movie.video = `${req.files.video[0].id}`;

    console.log(movie);
    const result = validateMovie(movie);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    }
    movie = Movie(movie);
    try {
      const saveRes = await movie.save();
      res.status(200).send(saveRes);
    } catch (e) {
      console.log(e);
      res.status(500).send("Creation failed");
    }
  }
);

//Read
router.get("/file/:id", (req, res) => {
  gfs.files.findOne(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    (err, file) => {
      //Check if files
      if (!file) {
        res.status(404).send("File not found");
      }
      res.status(200).send(file);
    }
  );
});

router.get("/page/:page/:results", async (req, res) => {
  const { results, page } = req.params;

  try {
    const movies = await Movie.find()
      .skip(page * results)
      .limit(parseInt(results));
    if (movies === []) {
      res.status(404).send("No movies found");
    }
    res.status(200).send(posts);
  } catch (e) {
    res.status(500).send(`Couldn't load movies ${e.message}`);
  }
});

router.get("/thumbNail/:id", (req, res) => {
  gfs.files.findOne(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    (err, file) => {
      //Check if file exists
      if (!file) {
        res.status(404).send("File not found");
      }
      //check if image file
      const re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
      if (!re.exec(file.filename)) {
        res.status(400).send("Not a image file");
      }

      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
  );
});

router.get("/video/:id", (req, res) => {
  gfs.files.findOne(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    (err, file) => {
      //Check if file exists
      if (!file) {
        res.status(404).send("File not found");
      }
      //check if image file
      const re = /(\.mp4|\.mov|\.wmv|\.flv|\.mkv)$/i;
      if (!re.exec(file.filename)) {
        res.status(400).send("Not a video file");
      }

      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
  );
});

//Update
router.put("/", (req, res) => {});
//Delete
router.delete("/", (req, res) => {});

module.exports = router;

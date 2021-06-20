const express = require("express");
const router = express.Router();
const { Movie, validateMovie, pickMovieData } = require("../models/Movie");

//Create
router.post("/", async (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  const movie = Movie(pickMovieData(req.body));
  try {
    const saveRes = await movie.save();
    res.status(200).send(saveRes);
  } catch (e) {
    console.log(e);
    res.status(500).send("Post creation failed");
  }
});

//Read
router.get("/ ", (req, res) => {
  res.send("YOOOOOO");
});
//Update
router.put("/", (req, res) => {});
//Delete
router.delete("/", (req, res) => {});

module.exports = router;

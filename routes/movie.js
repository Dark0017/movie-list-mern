const express = require("express");
const router = express.Router();

//Create
router.post("/", (req, res) => {});
//Read
router.get("/", (req, res) => {
  res.send("YOOOOOO");
});
//Update
router.put("/", (req, res) => {});
//Delete
router.delete("/", (req, res) => {});

module.exports = router;

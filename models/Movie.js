const { invalid } = require("joi");
const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 150,
    required: true,
  },
  language: {
    type: String,
    minLength: 3,
    maxLength: 150,
    required: true,
  },
  year: {
    type: Date,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

const valSchema = Joi.object({
  name: Joi.string().min(1).max(150).required(),
  language: Joi.string().min(3).max(150).required(),
  year: Joi.string().length(4).required(),
});

function validate(movie) {
  return valSchema.validate(movie);
}

function pickData(movie) {
  return _.pick(movie, ["name", "language", "year"]);
}

exports.Movie = Movie;
exports.validateMovie = validate;
exports.pickMovieData = pickData;

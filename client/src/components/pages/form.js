import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";

const Form = () => {
  const [movie, setMovie] = useState({ name: "", year: "", language: "" });

  const movieSchema = {
    name: Joi.string().required(),
    year: Joi.string().length(4).required(),
    language: Joi.string().required(),
  };

  const getYears = (startYear) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1888;
    while (startYear <= currentYear) {
      years.push(currentYear--);
    }
    return years;
  };

  const years = getYears();

  const validateForm = () => {
    const res = Joi.validate(movie, movieSchema);
    if (res.error) {
      console.log(res.error.details[0].message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    try {
      const res = await axios.post("http://localhost:5000/api/movie", movie);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="container py-20 mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col w-3/5 p-4 mx-auto bg-green-100 gap-y-3">
        <div className="flex flex-row flex-grow gap-x-4">
          <div className="flex flex-col w-2/3 gap-y-5">
            <div className="flex flex-row w-full gap-x-3">
              <input
                id="nameInput"
                type="text"
                name="name"
                placeholder="Name"
                value={movie.name}
                onChange={(e) =>
                  setMovie({ ...movie, name: e.currentTarget.value })
                }
                className="w-2/4 h-20 p-1"
              />
              <input
                id="yearInput"
                type="text"
                name="year"
                placeholder="Year"
                value={movie.year}
                onChange={(e) =>
                  setMovie({ ...movie, year: e.currentTarget.value })
                }
                list="years"
                className="w-2/4 h-20 p-1"
              />
              <datalist id="years" className="bg-red-600">
                {years.map((year) => (
                  <option>{year}</option>
                ))}
              </datalist>
            </div>
            <div>
              <input
                id="languageInput"
                type="text"
                name="language"
                value={movie.language}
                onChange={(e) =>
                  setMovie({ ...movie, language: e.currentTarget.value })
                }
                className="w-full h-20 p-1 bg-yellow-100"
                placeholder="Language"
              />
            </div>
          </div>
          <input id="thumbNail" type="file" className="w-1/3 p-2 bg-red-100" />
        </div>
        <input
          id="videoInput"
          type="file"
          placeholder="Upload File"
          className="h-24 p-5 mb-3 bg-pink-100 mt-7"
        />
      </div>
      <div className="w-3/5 py-4 mx-auto gap-y-3">
        <button type="submit" className="w-full h-16 bg-blue-300">
          Done
        </button>
      </div>
    </form>
  );
};

export default Form;

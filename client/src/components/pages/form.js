import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { HiUpload } from "react-icons/hi";
const Form = () => {
  const [movie, setMovie] = useState({
    name: "",
    year: "",
    language: "",
    thumbNail: "",
    video: "",
  });

  const movieSchema = {
    name: Joi.string().required(),
    year: Joi.string().length(4).required(),
    language: Joi.string().required(),
  };

  const validateForm = () => {
    const res = Joi.validate(movie, movieSchema, "allowUnknown:true");
    if (res.error) {
      console.log(res.error.details[0].message);
    }
  };

  const years = ((startYear) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1888;
    while (startYear <= currentYear) {
      years.push(currentYear--);
    }
    return years;
  })();

  const handleThumbnail = (e) => {
    if (e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0];
      const fileName = file.name;
      console.log(file);
      const re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
      if (!re.exec(fileName)) {
        alert("File extension not supported!");
        e.currentTarget.value = "";
      } else if (file.size >= 100000) {
        alert("Thumbnail should be smaller than 100 KB");
        e.currentTarget.value = "";
      } else {
        setMovie({ ...movie, thumbNail: e.currentTarget.files[0] });
      }
    }
  };

  const handleVideo = (e) => {
    if (e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0];

      const fileName = file.name;
      const re = /(\.mp4|\.mov|\.wmv|\.flv|\.mkv)$/i;

      if (!re.exec(fileName)) {
        alert("File extension not supported!");
        e.currentTarget.value = "";
      } else if (file.size >= 1000000) {
        alert("Video should be smaller than 1 MB");
        e.currentTarget.value = "";
      } else {
        setMovie({ ...movie, video: e.currentTarget.files[0] });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validateForm();
    const bodyData = new FormData();
    for (const data in movie) bodyData.append(data, movie[data]);
    try {
      //`https://ayushmans-movie-app.herokuapp.com/api/movie` remote string
      console.log("Submitted form");
      const res = await axios.post(
        "https://ayushmans-movie-app.herokuapp.com/api/movie",
        bodyData
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      className="container py-20 mx-auto mt-16 bg-gray-100 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-4/5 px-20 py-6 mx-auto border-t-2 border-black gap-y-3">
        <div className="flex flex-row flex-grow gap-x-4">
          <div className="flex flex-col w-2/3 gap-y-10">
            <div className="flex flex-row w-full gap-x-3">
              <label className="clear-both w-2/4 h-20 p-1">
                <span>Name</span>
                <input
                  id="nameInput"
                  type="text"
                  name="name"
                  placeholder="3 idiots"
                  value={movie.name}
                  onChange={(e) =>
                    setMovie({ ...movie, name: e.currentTarget.value })
                  }
                  className="block w-full h-20 p-2 mt-1 border-2 border-gray-300 rounded-lg"
                />
              </label>
              <label className="w-2/4 h-20 p-1 clear-left">
                Year
                <input
                  id="yearInput"
                  type="text"
                  name="year"
                  placeholder="2009"
                  value={movie.year}
                  onChange={(e) =>
                    setMovie({ ...movie, year: e.currentTarget.value })
                  }
                  list="years"
                  className="block w-full h-20 p-2 mt-1 border-2 border-gray-300 rounded-lg"
                />
                <datalist
                  id="years"
                  className="border-2 border-gray-300 rounded-2xl"
                >
                  {years.map((year) => (
                    <option>{year}</option>
                  ))}
                </datalist>
              </label>
            </div>
            <div className="flex flex-row w-full">
              <label className="w-full p-1">
                <span className="text-xl">Language</span>
                <input
                  id="languageInput"
                  type="text"
                  name="language"
                  value={movie.language}
                  onChange={(e) =>
                    setMovie({ ...movie, language: e.currentTarget.value })
                  }
                  className="w-full h-20 p-2 mt-1 border-2 border-gray-300 rounded-lg"
                  placeholder="Hindi"
                />
              </label>
            </div>
          </div>
          <div className="relative w-1/3 overflow-hidden transition duration-200 border-2 border-gray-300 rounded-full group hover:bg-black">
            <button className="w-full h-full">
              <span className="font-thin text-black group-hover:text-blue-700 ">
                <HiUpload className="m-auto text-7xl" />
              </span>
              {movie.thumbNail ? (
                <span className="font-thin text-black group-hover:text-white ">
                  {movie.thumbNail.name}
                </span>
              ) : (
                <span className="font-thin text-black group-hover:text-white ">
                  Upload a thumbnail
                </span>
              )}
              <input
                name="thumbNail"
                id="thumbNail"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => handleThumbnail(e)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden transition duration-200 border-2 border-gray-300 rounded-full group hover:bg-black">
          <button className="w-full h-full">
            <span className="font-thin text-black group-hover:text-red-500 ">
              <HiUpload className="m-auto text-7xl" />
            </span>
            {movie.video ? (
              <span className="font-thin text-black group-hover:text-white ">
                {movie.video.name}
              </span>
            ) : (
              <span className="font-thin text-black group-hover:text-white ">
                Upload a clip
              </span>
            )}
            <input
              id="videoInput"
              type="file"
              onChange={(e) => handleVideo(e)}
              accept=".mp4, .mov, .wmv, .flv, .mkv"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </button>
        </div>
        {/* <input
          id="videoInput"
          type="file"
          onChange={(e) => handleVideo(e)}
          accept=".mp4, .mov, .wmv, .flv, .mkv"
          className="h-24 p-5 mb-3 bg-pink-100 mt-7"
        /> */}
      </div>
      <div className="w-4/5 py-4 mx-auto gap-y-3">
        <button
          type="submit"
          className="w-full h-16 font-sans text-3xl font-normal transition duration-200 bg-blue-300 group hover:bg-blue-500"
        >
          <span className="group-hover:text-white">UPLOAD MOVIE</span>
        </button>
      </div>
    </form>
  );
};

export default Form;

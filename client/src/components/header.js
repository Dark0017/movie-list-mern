import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-col pt-5 ">
      <div className="  flex flex-row justify-center space-x-10 border-t-4 border-b-4 p-2 border-black border-dashed">
        <h1 className="justify-self-center font-bold font-mono  text-5xl bg-white text-red-600 h-full">
          Movie Mania
        </h1>
      </div>
      <div className="flex flex-row gap-x-1 pt-1">
        <Link
          to="form"
          className="flex w-1/2 text-2xl justify-center border-2 p-3 font-sans text-gray-600 active:text-red-600 focus:outline-none hover:text-white hover:bg-gray-900	 hower: transition duration-400 ease-out"
        >
          FORM
        </Link>
        <Link
          to="feed"
          className="flex w-1/2 text-2xl justify-center border-2 p-3 pr-2 font-sans text-gray-600 active:text-red-600 focus:outline-none hover:text-white hover:bg-gray-900  transition duration-400 ease-out"
        >
          FEED
        </Link>
      </div>
    </div>
  );
};

export default Header;

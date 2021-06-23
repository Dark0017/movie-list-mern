import React from "react";
import thumb from "./b2.png";
const ItemCard = () => {
  return (
    <div className="flex flex-row w-2/4 border-2 border-black rounded-xl group">
      <div className="flex flex-col flex-wrap w-4/6 truncate gap-y-3 group-hover:bg-black ">
        <div className="px-2 py-2 font-sans text-5xl font-bold group-hover:text-white">
          Terminator
        </div>
        <div className="flex flex-row content-between pb-3 pr-2 font-mono text-3xl">
          <div className="p-1 px-3 mx-1 text-left text-white bg-black rounded-full group-hover:bg-yellow-400 group-hover:text-red-600">
            1990
          </div>
          <div className="p-1 px-3 mx-1 text-left text-white bg-black rounded-full">
            English
          </div>
        </div>
      </div>
      <div className="w-2/6 h-full border-l-4 border-black border-double ">
        <img src={thumb} alt="thumbnail" className="w-full h-full "></img>
      </div>
    </div>
  );
};

export default ItemCard;

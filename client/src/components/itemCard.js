import React from "react";
import thumb from "./b2.png";
const ItemCard = () => {
  return (
    <div className="flex flex-row w-2/4 border-black border-2 rounded-xl group">
      <div className="flex flex-col flex-wrap truncate  w-4/6 gap-y-3 group-hover:bg-black ">
        <div className="text-5xl px-2 py-2 font-sans font-bold group-hover:text-white">
          Terminator
        </div>
        <div className="flex flex-row text-3xl content-between pr-2 pb-3 font-mono">
          <div className="text-left px-3 bg-black text-white rounded-full mx-1 p-1 group-hover:bg-yellow-400 group-hover:text-red-600">
            1990
          </div>
          <div className="text-left px-3 bg-black text-white rounded-full mx-1 p-1">
            English
          </div>
        </div>
      </div>
      <div className=" border-l-4 border-black border-double h-full w-2/6">
        <img src={thumb} className=" w-full h-full"></img>
      </div>
    </div>
  );
};

export default ItemCard;

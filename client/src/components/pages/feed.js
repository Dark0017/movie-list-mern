import React from "react";
import ItemCard from "../itemCard";
//import Pagination from "../pagination";

const Feed = () => {
  return (
    <div className="flex flex-col items-center h-screen p-3 mx-auto w-6/7 gap-y-3">
      Items
      <ItemCard />
      {/* <Pagination /> */}
    </div>
  );
};

export default Feed;

import React from "react";
import ItemCard from "../itemCard";
import Pagination from "../pagination";

const Feed = () => {
  return (
    <div className="flex flex-col h-screen w-2/3 mx-auto gap-y-3 p-3 items-center">
      Items
      <ItemCard />
      <Pagination />
    </div>
  );
};

export default Feed;

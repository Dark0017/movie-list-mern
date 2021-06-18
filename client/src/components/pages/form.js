import React from "react";
const Form = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col bg-green-100 w-3/5 gap-y-3 mx-auto p-4">
        <div className="flex flex-row flex-grow gap-x-4">
          <div className="flex flex-col w-2/3 gap-y-5">
            <div className="flex flex-row w-full gap-x-3">
              <input placeholder="Name" className="w-2/4 h-20 p-1" />
              <input placeholder="Year" className="w-2/4 h-20 p-1" />
            </div>
            <div className="w-full bg-yellow-100 h-20 p-1">Language</div>
          </div>
          <input type="file" className="w-1/3 p-2 bg-red-100"/>
        </div>
        <input
          type="file"
          placeholder="Upload File"
          className=" bg-pink-100 h-24 p-5 mt-7 mb-3"
        />
      </div>
      <div className="w-3/5 gap-y-3 mx-auto py-4">
        <button className="bg-blue-300 w-full h-16">Done</button>
      </div>
    </div>
  );
};

export default Form;

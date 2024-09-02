import {
  ArrowRightAlt,
} from "@mui/icons-material";
import React from "react";

const SecondarySearchBar = () => {
  return (
    <div className="max-w-[800px] mx-auto relative my-3">
      <form className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="search"
            className="w-[200px] sm:w-[350px] md:w-[500px] lg:w-[650px]  rounded-full py-2 pl-4 pr-16 focus:outline-none border border-gray-300 placeholder:text-sm sm:placeholder:text-md"
            placeholder="Generate scripts, stories, documents, screenplays..."
            style={{ transition: "none" }} // Prevent any transition effects on focus
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black text-white rounded-full hover:bg-gray-700"
          >
            <ArrowRightAlt />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondarySearchBar;

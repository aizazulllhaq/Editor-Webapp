import { ArrowOutward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

const ContentHeader = () => {
  return (
    <div className="max-w-[1200px] sm:mx-4 md:mx-auto flex sm:flex-nowrap flex-wrap justify-center sm:justify-around lg:justify-between items-end">
      <div className="left my-2 sm:my-0">
        <Typography className="text-xl font-bold my-1 px-4">Write</Typography>
        <form className="flex items-center">
          <div className="relative flex-grow">
            <input
              type="search"
              className="w-[250px] sm:w-[300px] md:w-[500px]  rounded-full py-2 pl-4 pr-16 focus:outline-none border border-gray-300 bg-gray-100 placeholder:text-sm sm:placeholder:text-sm"
              placeholder="Create scripts , stories , documents , screenplays..."
            />
            <div className="absolute right-1 top-4 transform -translate-y-1/2 px-2 md:px-4 py-1 mt-[6px] bg-black text-md text-white rounded-full hover:bg-gray-700">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50px",
                  padding: "2px 8px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Generate
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="right">
        <Button
          className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"
          endIcon={<ArrowOutward />}
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          variant="contained"
        >
          <Typography variant="button">Start Writing</Typography>
        </Button>
      </div>
    </div>
  );
};

export default ContentHeader;

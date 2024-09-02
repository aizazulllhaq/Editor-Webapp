import React from "react";
import ActionSelector from "./ActionSelector";
import SecondarySearchBar from "./SecondarySearchBar";
import { Button, Typography } from "@mui/material";

const MainContent = () => {
  return (
    <div className="w-full mb-16 mt-0 md:mt-2">
      <div
        className="max-w-[1280px] xl:mx-auto mx-[20px] rounded-md py-[100px] my-[10px] bg-cover bg-center flex justify-center items-center relative top-0"
        style={{
          backgroundImage: `url(https://w.wallha.com/ws/6/hS613DNa.jpg)`,
        }}
      >
        <div className="absolute top-0 right-0">
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "white",
              border: "1px solid white",
              margin:"6px 8px",
              padding:"2px 16px",
              "&:hover":{
                border:"1px solid gray"
              }
            }}
          >
            <Typography className="text-sm capitalize">Resume</Typography>
          </Button>
        </div>
        <div className="flex flex-col">
          <ActionSelector />
          <SecondarySearchBar />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

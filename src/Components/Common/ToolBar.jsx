import { IconButton, Typography } from "@mui/material";
import React from "react";
import {
  TextFormat,
  Undo,
  Redo,
  KeyboardArrowDown,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatListBulleted,
  InsertPhoto,
  InsertLink,
} from "@mui/icons-material";

const ToolBar = () => {
  return (
    <div className="py-2 shadow-md shadow-gray-200 flex flex-wrap justify-between rounded-t-md border-b border-gray-300">
      <div className="flex flex-wrap space-x-1 md:space-x-2">
        <div className="flex space-x-1 md:space-x-2 items-center border-r border-r-gray-200 pr-2 md:pr-4">
          <IconButton>
            <Undo />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
        </div>

        <div className="flex space-x-1 md:space-x-2 items-center border-r border-r-gray-200 pr-2 md:pr-4">
          <IconButton>
            <TextFormat />
          </IconButton>
          <IconButton>
            <Typography>𝝖𝗿𝗶𝗮𝗹</Typography>
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </div>

        <div className="flex space-x-1 md:space-x-2 items-center border-r border-r-gray-200 pr-2 md:pr-4">
          <IconButton>
            <FormatAlignLeft />
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <FormatListBulleted />
          </IconButton>
        </div>

        <div className="flex space-x-1 md:space-x-2 items-center border-r border-r-gray-200 pr-2 md:pr-4">
          <IconButton>
            <InsertLink />
          </IconButton>
          <IconButton>
            <InsertPhoto />
          </IconButton>
        </div>
      </div>

      <div className="flex items-center mx-2 md:mx-4">
        <Typography className="opacity-50">Total Words: 0</Typography>
      </div>
    </div>
  );
};

export default ToolBar;

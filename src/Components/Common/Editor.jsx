import { Button, Typography } from "@mui/material";
import React from "react";

const Editor = () => {
  return (
    <div className="relative shadow-sm shadow-gray-200 rounded-b-md">
      <Typography
        sx={{ fontFamily: "Roboto", fontWeight: "bold" }}
        className="opacity-40 pt-8 px-8"
        variant="h5"
      >
        Untitled
      </Typography>
      <textarea
        className="w-full min-h-[370px] rounded-lg resize-none focus:outline-none p-8 placeholder:font-mono"
        placeholder="start writing..."
        style={{ scrollbarWidth: "none" }}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ position: "absolute", bottom: 20, right: 10, opacity: 0.8 }}
      >
        <Typography className="lowercase">Submit</Typography>
      </Button>
    </div>
  );
};

export default Editor;

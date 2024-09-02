import { Key, KeyboardArrowDown } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

const ActionSelector = () => {
  return (
    <div className="max-w-[800px] mx-auto">
      <Typography className="text-white text-sm sm:text-md text-center md:text-xl tracking-widest px-2">
        What would you like to{" "}
        <Button
          className="py-[2px] px-[6px] sm:py-[4px] sm:px-[12px]"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "50px",
          }}
        >
          Write <KeyboardArrowDown />
        </Button>{" "}
        or{" "}
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "50px",
            padding: "4px 12px",
          }}
        >
          Explore
        </Button>{" "}
        today?
      </Typography>
    </div>
  );
};

export default ActionSelector;

import { FileDownload, ListAlt, MoreHoriz } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";

const Lists = [
  {
    Text: "untitled beat",
  },
];

const List = ({ Text }) => {
  return (
    <div className="px-4 py-2 flex justify-start md:justify-between opacity-80">
      <Button
        size="small"
        startIcon={<ListAlt />}
        sx={{
          color: "Black",
          "&:hover": { background: "none" },
        }}
      >
        <Typography className="capitalize">{Text}</Typography>
      </Button>
      <IconButton>
        <MoreHoriz sx={{ color: "black" }} />
      </IconButton>
    </div>
  );
};

const LeftSideBar = ({ isMobile }) => {
  return (
    <div
      className={`${
        isMobile && "h-[100vh]"
      } h-[450px]  shadow-lg shadow-gray-300 rounded-lg relative bg-white`}
    >
      <div className="lists">
        {Lists.map((list) => (
          <List Text={list.Text} />
        ))}
      </div>
      <div className="absolute bottom-4 right-1/4 shadow-lg shadow-gray-200 rounded-lg">
        <Button startIcon={<FileDownload />}>
          <Typography
            className="lowercase"
            sx={{
              fontSize: {
                xs: "10px", 
                sm: "12px", 
                md: "14px", 
                lg: "16px", 
                xl: "18px", 
              },
              color: "#488edc",
            }}
          >
            Import Script
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default LeftSideBar;

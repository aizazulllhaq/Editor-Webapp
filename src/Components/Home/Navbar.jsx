import { PersonPin } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white py-2 flex justify-around md:justify-normal items-center">
      <div className="md:flex-grow flex justify-center">
        <Typography className="font-serif text-xl">ΞＤＧＬＲＤ　</Typography>
      </div>
      <PersonPin className="mr-4"/>
    </div>
  );
};

export default Navbar;

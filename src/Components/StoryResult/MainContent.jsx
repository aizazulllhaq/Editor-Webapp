import React, { useState } from "react";
import { FormatAlignRight, Menu } from "@mui/icons-material";
import ActionBar from "../Common/ActionBar";
import LeftSideBar from "../Common/LeftSideBar";
import RightSideBar from "../Common/RightSideBar";
import EndBar from "./EndBar";

const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative max-w-[1250px] mx-auto mt-14">
      <ActionBar /> 

      <div className="absolute right-5 top-[50px] sm:top-[20px] p-4 z-50 md:hidden">
        {isSidebarOpen ? (
          <FormatAlignRight onClick={toggleSidebar} />
        ) : (
          <Menu onClick={toggleSidebar} />
        )}
      </div>

      <div className="grid md:grid-cols-[30%_50%_20%] lg:grid-cols-[20%_60%_20%]">
         <div
          className={`absolute top-0 left-0 z-40 bg-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:block md:shadow-none`}
          style={{
            width: "80%",
            maxWidth: "300px",
            height: "52vh", 
          }}
        >
          <LeftSideBar isMobile={isSidebarOpen} />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row md:col-span-2 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <RightSideBar />
          </div>

          <div className="flex-2">
            <EndBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

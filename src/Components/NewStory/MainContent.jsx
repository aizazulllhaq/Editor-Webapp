import React, { useState } from "react";
import { FormatAlignRight, Menu } from "@mui/icons-material";
import ActionBar from "../Common/ActionBar";
import LeftSideBar from "../Common/LeftSideBar";
import RightSideBar from "../Common/RightSideBar";


const MainContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative max-w-[1300px] mx-auto mt-14">
      <ActionBar />

      <div className="absolute right-5 top-[50px] sm:top-[20px] p-4 md:hidden z-50">
        {isSidebarOpen ? (
          <FormatAlignRight onClick={toggleSidebar} />
        ) : (
          <Menu onClick={toggleSidebar} />
        )}
      </div>

      <div className="mx-4 grid md:grid-cols-[25%_auto] lg:grid-cols-[25%_auto]">
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

        <div className="flex-1">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

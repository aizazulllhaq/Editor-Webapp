import React from "react";
import Navbar from "../Components/Home/Navbar";
import MainContent from "../Components/Home/MainContent";
import ContentSection from "../Components/Home/ContentSection";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <MainContent />
      <ContentSection />
    </div>
  );
};

export default HomePage;

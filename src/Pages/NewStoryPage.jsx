import React from "react";
import Header from "../Components/Common/Header";
import MainContent from "../Components/NewStory/MainContent";
import AdditionalFeatures from "../Components/Common/AdditionalFeatures";


const NewStoryPage = () => {
  return (
    <div className="w-full">
      <Header />
      <MainContent />
      <AdditionalFeatures />
    </div>
  );
};

export default NewStoryPage;

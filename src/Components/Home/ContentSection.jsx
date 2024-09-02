import React from "react";
import ContentHeader from "./ContentHeader";
import ContentCardsContainer from "./ContentCardsContainer";

const ContentSection = () => {
  return (
    <div className="w-full">
      <ContentHeader />
      <ContentCardsContainer />
    </div>
  );
};

export default ContentSection;

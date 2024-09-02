import React from "react";
import creditCard from "../../assets/credit-card.png";

const AdditionalFeatures = () => {
  return (
    <div className="absolute top-1/2 right-0 w-[80px] h-[80px] bg-sky-100 rounded-l-md p-4 hidden md:block">
      <img src={creditCard} alt="" />
    </div>
  );
};

export default AdditionalFeatures;

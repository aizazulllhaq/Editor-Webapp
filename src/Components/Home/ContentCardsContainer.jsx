import React from "react";
import ContentCard from "./ContentCard";

const ContentCardsContainer = () => {
  const stories = [
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xcJjAuHIZqQhgI7ekArV1crEa0GQaJG01Zx08m70E5GEvjwM3JiUW5TZwtBQkL6Ha_g&usqp=CAU",
      title: "The Great Adventure",
    },
    {
      imgUrl: "https://img.freepik.com/premium-photo/amazing-astronaut-space-wallpaper-4k-background_839182-1692.jpg",
      title: "Mystery in the Woods",
    },
    {
      imgUrl: "https://img.freepik.com/premium-photo/astronaut-is-sitting-field-with-star-sky_1169665-91203.jpg",
      title: "Tales of the Past",
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxodjPyTzyQbToPVgsAvvQYEt44E0nomBpLbdXp17a2yF2BMt0Qkrn4caqAwr-fDz55xw&usqp=CAU",
      title: "The Lost World",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {stories &&
          stories.map((story, index) => (
            <ContentCard key={index} Title={story.title} imgUrl={story.imgUrl} />
          ))}
      </div>
    </div>
  );
};

export default ContentCardsContainer;

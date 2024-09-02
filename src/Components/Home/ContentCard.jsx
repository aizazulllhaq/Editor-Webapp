import { Typography } from "@mui/material";
import React from "react";

const ContentCard = ({
  Title,
  imgUrl = "https://media.istockphoto.com/id/1326978045/photo/lonely-big-tree-growing-up-on-ancient-books-like-a-painting-in-literature.jpg?s=612x612&w=0&k=20&c=bedRj10WevmGKOltdrCbo5FVRBRE1c9LI5pj_E3m4AE=",
}) => {
  return (
    <div className="border-b border-b-gray-400 rounded-2xl my-4 mx-4 md:mx-0">
      <img src={imgUrl} className="w-full h-[200px] object-cover rounded-t-2xl" alt={Title} />
      <Typography className="p-4 text-center font-semibold">{Title}</Typography>
    </div>

    
  );
};

export default ContentCard;


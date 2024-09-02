import { IconButton } from "@mui/material";
import NoteAdd from "../../assets/pencil.png";
import Boy from "../../assets/happy.png";
import Sword from "../../assets/sword.png";
import Buildings from "../../assets/skyscraper.png";

const Icon = ({ iconImg }) => (
    <div className="rounded-full w-10 md:w-14 h-10 md:h-14 border border-gray-100 flex justify-center items-center bg-gray-50 hover:bg-gray-100 cursor-pointer shadow-sm shadow-gray-300">
      <img src={iconImg} alt="" className="w-[30px] md:w-[40px] mx-4" />
    </div>
);

const NavigationIcons = () => {
  return (
    <div className="px-4 sm:px-16 md:px-24 py-6 my-2 rounded-lg flex space-x-4 md:space-x-8 shadow-lg shadow-gray-200">
      <Icon iconImg={NoteAdd} />

      <Icon iconImg={Boy} />

      <Icon iconImg={Buildings} />

      <Icon iconImg={Sword} />
    </div>
  );
};

export default NavigationIcons;

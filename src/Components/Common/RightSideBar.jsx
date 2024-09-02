import ToolBar from "./ToolBar";
import Editor from "./Editor";

const RightSideBar = () => {
  return (
    <div className="mx-2 mb-4 shadow-lg shadow-gray-300">
      <ToolBar />
      <Editor />
    </div>
  );
};

export default RightSideBar;

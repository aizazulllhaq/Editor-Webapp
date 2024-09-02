import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  Description,
  DragHandle,
  EditNote,
  KeyboardArrowDown,
  Summarize,
  TipsAndUpdates,
  ToggleOn,
} from "@mui/icons-material";

const actionData = [
  {
    startIcon: <AddIcon />,
    Text: "Add",
    endIcon: <KeyboardArrowDown />,
  },
  {
    startIcon: <EditNote />,
    Text: "Write",
    endIcon: "",
  },
  {
    startIcon: <Summarize />,
    Text: "Summarize",
    endIcon: "",
  },
  {
    startIcon: <DragHandle />,
    Text: "Logline",
    endIcon: <KeyboardArrowDown />,
  },
  {
    startIcon: <Description />,
    Text: "Describe",
    endIcon: "",
  },
  {
    startIcon: <TipsAndUpdates />,
    Text: "Generate",
    endIcon: "",
  },
];

const Action = ({ startIcon, Text, endIcon }) => {
  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      variant="contained"
      color="primary"
      size="small"
      sx={{
        margin: "2px 4px",
        backgroundColor: "white",
        color: "#488edc",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "10px",
        textTransform: "none",
      }}
    >
      {Text}
    </Button>
  );
};

const ActionBar = () => {
  return (
    <div className="m-4 flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap space-x-1 md:space-x-2">
        {actionData.map((data, index) => (
          <Action
            key={index}
            startIcon={data.startIcon}
            Text={data.Text}
            endIcon={data.endIcon}
          />
        ))}
      </div>

      <div className="flex items-center space-x-2 mx-[10px]">
        <Typography
          color="primary"
          className="capitalize tracking-widest"
          fontSize="11px"
          fontWeight="bold"
        >
          Auto Save
        </Typography>
        <ToggleOn color="primary" sx={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );
};

export default ActionBar;

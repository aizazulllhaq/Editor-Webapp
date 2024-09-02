import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const EndBar = () => {
  return (
    <div className="h-auto lg:h-[450px] shadow-lg shadow-gray-400 rounded-lg relative flex flex-col mb-4 sm:pb-0 pb-8 px-4 mx-2">
      <div className="heading p-6">
        <Typography
          color="primary"
          sx={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }} 
        >
          Preview
        </Typography>
      </div>

      <div className="card mx-auto lg:w-[200px] sm:mx-8 mb-4">
        <Card>
          <CardContent className="border-b border-b-gray-200">
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontFamily: "roboto, sans-serif",
                fontWeight: "bold",
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
          <CardActions className="space-x-1">
            <Button size="small">Insert</Button>
            <Button size="small">Replace</Button>
            <Button size="small">Copy</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default EndBar;

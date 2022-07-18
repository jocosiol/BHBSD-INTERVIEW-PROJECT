import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ClientCard(props) {
  return (
    <Card sx={{ maxWidth: 200, backgroundColor: "black" }}>
      <CardMedia
        component="img"
        height="200"
        image={props.client.speaker_head_shot_to_display}
        alt="profilepic"
      />
      <CardContent>
        <Typography
          sx={{ color: "white" }}
          align="left"
          gutterBottom
          variant="h6"
          component="div"
        >
          {props.client.firstname} {props.client.lastname}
        </Typography>
        <Typography
          sx={{ color: "red" }}
          align="left"
          variant="body2"
          color="text.secondary"
        >
          {props.client.company}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClientCard;

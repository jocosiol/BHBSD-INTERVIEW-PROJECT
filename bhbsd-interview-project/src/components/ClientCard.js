import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

function ClientCard() {
  return (
    <ButtonBase>
      <Card sx={{ maxWidth: 200, backgroundColor: "black" }}>
        <CardMedia
          component="img"
          height="200"
          image="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
          alt="profilepic"
        />
        <CardContent>
          <Typography sx={{color: "white"}} align="left" gutterBottom variant="h6" component="div">
            Full Name
          </Typography>
          <Typography sx={{color: "red"}} align="left" variant="body2" color="text.secondary">
            Client's Company
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default ClientCard;

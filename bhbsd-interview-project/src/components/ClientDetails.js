import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function ClientDetails(props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.client.firstname} {props.client.lastname}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.client.jobtitle}
        </Typography>
        <CardMedia
          component="img"
          sx={{ maxWidth: 200 }}
          image={props.client.speaker_head_shot_to_display}
          alt="profilepic"
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }} align="justify">
          {props.client.bio}
        </Typography>
      </Box>
    </div>
  );
}

export default ClientDetails;

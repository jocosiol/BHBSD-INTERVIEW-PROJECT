import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function ClientDetails() {
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
          Full Name
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Position in Company
        </Typography>
        <CardMedia
          component="img"
          sx={{ maxWidth: 200 }}
          image="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
          alt="profilepic"
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }} align="justify" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          ullamcorper eleifend lacinia. Pellentesque sed mauris mollis, finibus
          mauris gravida, porttitor orci. Nulla tincidunt lectus arcu, porta
          congue arcu porttitor id. Sed mauris magna, dignissim et fringilla
          sed, consectetur non eros. Integer auctor gravida mi. Curabitur
          feugiat nulla ante, et fringilla justo tristique a.
        </Typography>
      </Box>
    </div>
  );
}

export default ClientDetails;

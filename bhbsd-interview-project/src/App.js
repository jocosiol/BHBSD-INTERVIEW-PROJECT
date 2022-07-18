import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ClientCard from "./components/ClientCard";
import ClientDetails from "./components/ClientDetails";
import ButtonBase from "@mui/material/ButtonBase";
import Modal from "@mui/material/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid sx={{ textAlign: "center", marginBottom: 5 }}>
          <Typography
            sx={{ color: "white" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            MEET OUR 30 FEATURED INVESTORS
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(30)).map((_, index) => (
            <Grid item xs={2} sm={2.3} md={2.3} key={index}>
              <ButtonBase onClick={handleOpen}>
                <ClientCard />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ClientDetails />
      </Modal>
    </div>
  );
}

export default App;

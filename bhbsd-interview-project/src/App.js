import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Grid, Typography, ButtonBase, Modal } from "@mui/material/";
import ClientCard from "./components/ClientCard";
import ClientDetails from "./components/ClientDetails";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clients, setClients] = useState();
  const [selectedClient, setSelectedClient] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = (c) => {
    setOpen(true);
    setSelectedClient(c);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://youngstartup.io/api/cwebsite/get_speakers_dyn")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setClients(result.speakers.slice(0, 30));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <Typography
        sx={{ color: "white" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Error: {error.message}
      </Typography>
    );
  } else if (!isLoaded) {
    return (
      <Typography
        sx={{ color: "white", marginTop: 10 }}
        variant="h4"
        gutterBottom
        component="div"
        align="center"
      >
        Loading...
      </Typography>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ textAlign: "center", marginBottom: 5 }}>
            <Typography
              sx={{ color: "white", marginTop: 5 }}
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
            {clients.map((client, index) => (
              <Grid item xs={2} sm={2.3} md={2.3} key={index}>
                <ButtonBase onClick={() => handleOpen(client)}>
                  <ClientCard key={index} client={client} />
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
          <ClientDetails client={selectedClient} />
        </Modal>
      </div>
    );
  }
}

export default App;

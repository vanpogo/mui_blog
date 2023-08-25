import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "../Card/Card";

const Recents = () => {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
      }}
      mt={5}
    >
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;

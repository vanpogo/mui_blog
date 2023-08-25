import React from "react";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import CardImage from "../../static/cardImage.jpg";

const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={CardImage}
        title="card image"
        sx={{ width: "100%" }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography
          align="center"
          fontSize={{ xs: "10px", sm: "15px", md: "20px", lg: "25px" }}
          sx={{
            color: "tomato",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Perfumes
        </Typography>
        <Typography
          align="center"
          variant="h4"
          fontSize={{ xs: "10px", sm: "15px", md: "20px", lg: "25px" }}
          color="#3B82F6"
          fontWeight="500"
        >
          Wearing this will make everyone love you
        </Typography>
        <Typography
          align="center"
          variant="body1"
          fontSize={{ xs: "8px", sm: "10px", md: "12px", lg: "15px" }}
          color="grey"
          fontWeight="500"
          mt={1}
        >
          its womens love
        </Typography>
        <Typography
          align="center"
          variant="h4"
          fontSize={{ xs: "10px", sm: "15px", md: "20px", lg: "25px" }}
          color="grey"
          fontWeight="500"
          mt={1}
        >
          Lizards are a widespread group of squamate reptiles,with over 6,000
          species,ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Card;

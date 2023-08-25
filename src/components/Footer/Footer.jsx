import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    gap: 10,
  });

  const TextStyle = styled(Typography)({
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
    ":hover": {
      color: "tomato",
    },
  });
  return (
    <Box
      sx={{
        background: "black",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} p={7} gap={3}>
        <Box flex={1} sx={{ fontSize: "10px" }}>
          <TextStyle align="center">Contact Us</TextStyle>
          <TextStyle align="center">
            of squamate reptiles,with over 6000 species,
          </TextStyle>
          <TextStyle align="center">continents except Antarcti</TextStyle>
          <TextStyle align="center">ranging across</TextStyle>
        </Box>
        <Box flex={1}>
          <TextStyle align="center">Data policy</TextStyle>
          <TextStyle align="center">cookies</TextStyle>
          <TextStyle align="center">Data Safety</TextStyle>
        </Box>
        <Box flex={1}>
          <TextStyle align="center">Categories</TextStyle>
          <TextStyle align="center">Kids</TextStyle>
          <TextStyle align="center">Women</TextStyle>
          <TextStyle align="center">Men</TextStyle>
        </Box>
        <Box flex={1}>
          <TextStyle align="center">Follow Us</TextStyle>

          <SocialBox>
            <Facebook sx={{ color: "white" }} />
            <Instagram sx={{ color: "white" }} />
            <Twitter sx={{ color: "white" }} />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;

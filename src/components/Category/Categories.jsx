import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import Kids from "../../static/kids.jpg";
import Men from "../../static/men.jpg";
import Women from "../../static/women.jpg";

const Categories = () => {
  const categories = [
    { name: "Kids", img: `${Kids}` },
    { name: "Men", img: `${Men}` },
    { name: "Women", img: `${Women}` },
  ];

  const CategoriesBox = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "25px",
  });

  const StyledTypography = styled(Typography)({
    padding: "1% 15% 1% 15%",
    background: "white",
    opacity: "0.6",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
  });

  const LineBox = styled(Box)({
    width: "100%",
    height: "2px",
    opacity: "0.7",
    background: "black",
  });
  return (
    <CategoriesBox pt={5} pb={5}>
      <Stack
        sx={{ width: "100%" }}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2, md: 4 }}
      >
        {categories.map(({ name, img }, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: { xs: "100%", sm: "100%", md: "80%" },
              height: { xs: "200px", sm: "100px", md: "150px", lg: "200px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledTypography
              sx={{ fontSize: { xs: "30px", sm: "25px", md: "35px" } }}
              variant="h4"
            >
              {name}
            </StyledTypography>
          </Box>
        ))}
      </Stack>
      <LineBox />
    </CategoriesBox>
  );
};

export default Categories;

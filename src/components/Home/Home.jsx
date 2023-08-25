import React from "react";
import { Box, Container, Stack, styled } from "@mui/material";
import Hero from "../Hero/Hero";
import Categories from "../Category/Categories";
import Recents from "../Recent/Recents";
import RightBar from "../RightBar/RightBar";

const Home = () => {
  const LeftBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
  });

  return (
    <Box>
      <Hero />
      <Container maxWidth={"xl"}>
        <Categories />

        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={2}
        >
          <LeftBox flex={3}>
            <Recents />
          </LeftBox>
          <Box flex={1}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

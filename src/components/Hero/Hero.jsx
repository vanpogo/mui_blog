import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/HeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="subtitle1" sx={{ fontWeight: "100" }}>
        We Make yoy look the better of you!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ background: "white", opacity: "0.8", width: "35%" }}>
          <Typography variant="h6" color="tomato" align="center" pt={7}>
            Trending Styles
          </Typography>
          <Typography
            fontSize={{
              xs: "12px",
              sm: "17px",
              md: "20px",
              lg: "25",
              xl: "30px",
            }}
            variant="h4"
            align="center"
            color="black"
            fontWeight="bold"
          >
            Life is Boring without Fashion!
          </Typography>
          <Typography
            fontSize={{
              xs: "10px",
              sm: "9px",
              md: "12px",
              lg: "15",
              xl: "20px",
            }}
            variant="body2"
            align="center"
            pb={7}
          >
            we love to change your style lorem ipsum
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

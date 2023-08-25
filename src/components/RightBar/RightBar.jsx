import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
  styled,
} from "@mui/material";
import Image2 from "../../static/image2.jpg";
import Image4 from "../../static/image4.jpg";
import Image1 from "../../static/cardImage.jpg";
import Card from "../Card/Card";

const RightBar = () => {
  const lists = [
    {
      img: Image1,
      text: "Ill be in your neighborhood doing errands this..",
    },
    {
      img: Image2,
      text: "Ill be in your neighborhood doing errands this..",
    },
    {
      img: Image4,
      text: "Ill be in your neighborhood doing errands this..",
    },
  ];

  const TitleBox = styled(Box)({
    background: "black",
    width: "100%",
    color: "white",
    padding: "4px",
  });

  return (
    <Box mt={5}>
      <TitleBox>
        <Typography
          fontSize={{ xs: "12px", sm: "15px", md: "18px" }}
          align="center"
        >
          Most Popular
        </Typography>
      </TitleBox>
      <List sx={{ width: "100%" }}>
        {lists.map(({ img, text }, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar
                variant="square"
                alt={index}
                src={img}
                sx={{
                  width: 70,
                  height: 70,
                  cursor: "pointer",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ marginLeft: "10px" }}
              primary={
                <>
                  <Typography fontSize={{ xs: "10px", sm: "13px", md: "15px" }}>
                    {text}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <TitleBox>
        <Typography
          fontSize={{ xs: "12px", sm: "15px", md: "18px" }}
          align="center"
        >
          About Us
        </Typography>
      </TitleBox>
      <Card />
    </Box>
  );
};

export default RightBar;

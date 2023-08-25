import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Menu as MenuIcon,
} from "@mui/icons-material/";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
    background: "black",
  });

  const MenuItems = [
    { name: "Home", Link: "/" },
    { name: "Products", Link: "/products" },
    { name: "Portfolio", Link: "/portfolio" },
    { name: "Blog", Link: "/blog" },
    { name: "Contact Us", Link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static" sx={{ background: "#020808" }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox display={{ xs: "none", sm: "none", md: "flex" }}>
          {MenuItems.map(({ name }, index) => (
            <Typography key={index} sx={{ cursor: "pointer" }}>
              {name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="   Search..." sx={{ color: "white" }} />
        </SearchBox>
        <MenuIcon
          onClick={() => {
            setOpen(!open);
          }}
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        />
      </StyledToolbar>
      <Menu
        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {MenuItems.map(({ name }, index) => (
          <MenuItem
            onClick={() => setOpen(open)}
            key={index}
            sx={{ width: "150px" }}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default NavBar;

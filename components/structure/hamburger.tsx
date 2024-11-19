import { useState } from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home"; //home
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService"; //machines
import DryCleaningIcon from "@mui/icons-material/DryCleaning"; // Fliff n fold
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Delivery
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates"; //tips

import LogoWash from "@/public/assets/LogoWash.svg";
import Socials from "../Socials";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const iconArray = [
    { text: "Home", icon: <HomeIcon />, href: "/" },
    { text: "Machines", icon: <LocalLaundryServiceIcon />, href: "/machines" },
    {
      text: "Delivery Service",
      icon: <LocalShippingIcon />,
      href: "/delivery",
    },
    { text: "Fluff and Fold", icon: <DryCleaningIcon />, href: "/fluffnfold" },
    { text: "Laundry Tips", icon: <TipsAndUpdatesIcon />, href: "/tips" },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: "9vw" }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LogoWash />
          <Typography sx={{ margin: "2vw" }}> LaundroMapp </Typography>
        </Box>
        <Socials />
        <Drawer open={open} onClose={toggleDrawer}>
          <List>
            {iconArray.map(({ text, icon, href }, index) => (
              <ListItem key={text} disablePadding>
                <Link href={href} passHref>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import LogoWash from "@/public/assets/LogoWash.svg";

export default function Footer() {
  return (
    <Box
      sx={{ background: "#214B6F", display: "flex", textAlign: "center" }}
      justifyContent={"center"}
      flexDirection={"column"}
      mt={10}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: 5,
        }}
      >
        <LogoWash />
        <Typography fontSize={18} alignSelf={"center"} ml={2}>
          LaundroMapp is a locally owned run by women business
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: 30,
          mr: 30,
          justifyContent: "space-between",
        }}
      >
        <Typography>
          Rivendell Location:
          <br /> 4242 Amdir Way,
          <br /> Rivendell, Middle-Earth 111154
        </Typography>
        <Typography>
          Hobbiton Location: <br /> Coming Soon!
        </Typography>
        <Typography>
          Contact Us: (111) 222-3333 <br /> or <br /> fakeemail@laundromapp.com
        </Typography>
        <Typography>
          Open Daily from 5am to 11pm
          <br />
          Thanksgiving: CLOSED
          <br />
          Christmas Day: CLOSED
          <br />
          New Years Eve: 5am to 2pm
          <br />
          New Years Day: 3pm to 9pm
        </Typography>
      </Box>
      <Typography mt={3} mb={3}>
        ©2024 Arlette Olalde | Thanks for Visiting
      </Typography>
    </Box>
  );
}

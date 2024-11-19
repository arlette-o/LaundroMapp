import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
          margin: "5vw",
        }}
      >
        <LogoWash />
        <Typography fontSize="3vw" alignSelf={"center"} ml="1vw">
          LaundroMapp is a locally owned, run by women business
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: "10vw",
          mr: "10vw",
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

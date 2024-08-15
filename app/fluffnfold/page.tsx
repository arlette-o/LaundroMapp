import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/structure/headerText";

import CleanLaundry from "@/public/assets/cleanLaundry.jpg";

export default function FluffNFold() {
  return (
    <>
      <Card>
        <Image
          src={CleanLaundry}
          alt="Header Image"
          height={100}
          width={2000}
        />
      </Card>
      <Box textAlign="center" sx={{ marginRight: 20, marginLeft: 20 }}>
        <HeaderText title="Fluff 'N' Fold" />
        <HeaderText title="Hours" />
        <Typography>Open Daily from 11am to 7pm </Typography>
        <Typography>Thanksgiving: CLOSED</Typography>
        <Typography>Christmas Day: CLOSED</Typography>
        <Typography>New Years Eve: 5am to 2pm </Typography>
        <Typography>New Years Day: 3pm to 9pm</Typography>
      </Box>
    </>
  );
}

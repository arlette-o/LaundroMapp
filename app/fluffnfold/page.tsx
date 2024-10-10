import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/headerText";
import CouponForm from "@/components/CouponForm";

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
        <Typography>
          Are you busy, need some help, or just not feeling up to doing your
          laundry? We'll take the hassle out of laundry day so you can focus on
          what truly matters. Our professional team delivers top-notch care for
          your clothes with a range of services designed to fit your busy
          lifestyle. From everyday washes and delicate hand-washing to
          fluff-and-fold and express service options, we handle it all with
          precision and a touch of personal care. Just walk in and drop off your
          clothes. No appointment necessary.
        </Typography>
        <HeaderText title="Rates" />
        <Typography>Standard Fluff 'N' Fold</Typography>
        <Typography>
          $2.25 /lb except for specialty items 24 hour turnaround First time
          customers get 50% off
        </Typography>
        <Typography>Fluff 'N' Fold Express</Typography>
        <Typography>
          $2.75 /lb except for specialty items Same day service (drop off before
          8pm) First time customers get 50% off
        </Typography>

        <Box display={"flex"} justifyContent={"center"} margin={2}>
          <CouponForm />
        </Box>
        <HeaderText title="Fluff 'N' Fold Hours" />
        <Typography>Open Daily from 11am to 7pm </Typography>
        <Typography>Thanksgiving: CLOSED</Typography>
        <Typography>Christmas Day: CLOSED</Typography>
        <Typography>New Years Eve: 5am to 2pm </Typography>
        <Typography>New Years Day: 3pm to 9pm</Typography>
      </Box>
    </>
  );
}

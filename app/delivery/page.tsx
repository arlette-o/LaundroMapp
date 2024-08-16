import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/headerText";
import ScheduleForm from "@/components/ScheduleForm";
import DeliveryVan from "@/public/assets/DeliveryVan.jpg";

export default function Delivery() {
  return (
    <>
      <Card>
        <Image src={DeliveryVan} alt="Header Image" height={100} width={2000} />
      </Card>
      <Box textAlign="center" sx={{ marginRight: 20, marginLeft: 20 }}>
        <HeaderText title="Laundry Delievered Straight to You" />
        <Typography>
          Discover the ultimate convenience with our Laundry Delivery Service,
          where we bring professional-grade laundry care right to your doorstep.
          Say goodbye to the drudgery of washing, drying, and folding—our
          dedicated team is here to handle it all with ease and efficiency. We
          offer a seamless pickup and delivery experience that fits effortlessly
          into your busy schedule. Simply schedule a pickup online, and our
          uniformed staff will arrive promptly to collect your laundry. We use
          state-of-the-art, eco-friendly equipment and premium hypoallergenic
          detergents to ensure your clothes are treated with the utmost care.
          Whether you need a quick refresh, thorough cleaning, or delicate
          handling, our skilled professionals deliver results you’ll love. Now
          you can enjoy crisp, fresh, and beautifully folded laundry without
          ever leaving your home. Our commitment to quality and convenience
          means you can spend less time on chores and more time on what you
          enjoy.
        </Typography>
        <HeaderText title="Rates" />
        <Typography>
          $2.75/lb, except for certain specialty items Free delivery and a 24
          hour turnaround First time customers get 50% off! Use promo code
          First50 at checkout
        </Typography>
        <Typography>Free Delivery within local Rivendell area</Typography>
        <HeaderText title="Schedule your pickup today!" />

        <ScheduleForm />
      </Box>
    </>
  );
}

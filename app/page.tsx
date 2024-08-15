import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/structure/headerText";

import WasherHeader from "@/public/assets/WasherHeader.jpeg";
import Map from "@/public/assets/Map.png";

export default function Home() {
  return (
    <>
      <Card>
        <Image
          src={WasherHeader}
          alt="Header Image"
          height={100}
          width={2000}
        />
      </Card>
      <Box textAlign="center" sx={{ marginRight: 20, marginLeft: 20 }}>
        <HeaderText title="About Us" />
        Welcome to LaundroMapp, where we turn laundry day into a breeze! At
        LaundroMapp, we’re dedicated to providing a top-notch laundry experience
        for our community. Founded on the principle that clean clothes shouldn’t
        come at the expense of convenience, we offer a range of services
        designed to make your life easier. Our state-of-the-art machines ensure
        your laundry is cleaned efficiently and effectively, while our friendly
        staff is always here to help with any questions or concerns. We take
        pride in maintaining a welcoming, clean, and comfortable environment for
        all our customers. Enjoy free Wi-Fi, cozy seating, and refreshments
        while you wait. For those on the go, our drop-off service means you can
        leave your laundry with us and pick it up fresh and folded at your
        convenience. At LaundroMapp, we believe in giving back to our community.
        We regularly participate in local events and support various charitable
        organizations. Our commitment to quality and community sets us apart and
        makes us more than just a laundromat—it makes us a trusted part of your
        daily life. Thank you for choosing LaundroMapp. We look forward to
        serving you and making your laundry experience as smooth and enjoyable
        as possible!
        <HeaderText title="Location" />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box width="30vw" marginRight={8}>
            <Typography>
              42 Rivendell Lane, Elvenwood, Middle-Earth 111154
            </Typography>
            <Typography>
              Tucked away in a tranquil glade surrounded by ancient, towering
              trees and shimmering elven architecture, LaundriMapp blends
              seamlessly into the ethereal beauty of Rivendell. As you approach,
              you’re greeted by the soft, melodious hum of nature and the gentle
              glow of elven lanterns guiding your way. The laundromat is
              equipped with state-of-the-art elven technology, ensuring your
              garments receive the finest care. Each washing and drying station
              is designed with an elegant touch, featuring silken fabrics and
              enchanted washers that clean with the essence of Rivendell’s
              purest waters. Elven staff, known for their grace and expertise,
              are on hand to assist with any needs, ensuring a flawless laundry
              experience.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image src={Map} height={300} width={300} alt="Location Map" />
          </Box>
        </Box>
        <HeaderText title="Hours" />
        <Typography>Open Daily from 5am to 11pm </Typography>
        <Typography>Thanksgiving: CLOSED</Typography>
        <Typography>Christmas Day: CLOSED</Typography>
        <Typography>New Years Eve: 5am to 2pm </Typography>
        <Typography>New Years Day: 3pm to 9pm</Typography>
        <HeaderText title="We also offer..." />
        <Typography>Free Wifi </Typography>
        <Typography>Free Parking</Typography>
        <Typography>Change Machine</Typography>
        <Typography>Soap Dispenser </Typography>
        <Typography>Seating Area </Typography>
        <Typography>Charging Stations </Typography>
        <Typography>Child Play Area </Typography>
      </Box>
    </>
  );
}

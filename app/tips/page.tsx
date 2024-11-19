import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/headerText";

import Frustration from "@/public/assets/Frustration.jpg";

export default function Tips() {
  return (
    <>
      <Card>
        <Image src={Frustration} alt="Header Image" height={100} width={2000} />
      </Card>
      <Box textAlign="left" sx={{ marginRight: "2vw", marginLeft: "2vw" }}>
        <HeaderText title="Avoid Frustration" />
        <Typography>
          By following these tips, you can keep your laundry looking great and
          make your laundry routine more efficient!
        </Typography>
        <Typography m={2}>
          <br />
          <br />
          <Typography fontWeight={500} variant="h4" color="#2E689B" ml={-3}>
            General Tips
          </Typography>
          <strong>Sort Your Laundry: </strong>Separate your laundry into
          categories such as colors, whites, delicates, and heavy items. This
          prevents colors from bleeding onto whites and ensures that different
          fabrics are washed appropriately. <br />
          <strong>Check Labels: </strong>Always read and follow the care labels
          on your clothing. They provide important information on washing
          temperatures, drying methods, and ironing instructions. <br />
          <strong>Use the Right Detergent: </strong>Choose a detergent suitable
          for your laundry type—regular, high-efficiency (HE), or specialized
          detergents for specific needs like delicates or sportswear. <br />
          <strong>Don’t Overload the Washer: </strong>Overloading can prevent
          clothes from washing thoroughly and may damage your washer. Follow the
          manufacturer’s guidelines for load sizes. <br />
          <strong>Pre-treat Stains: </strong>Treat stains as soon as possible
          with a stain remover or a bit of detergent. Gently rub the treatment
          into the stain before washing. <br />
          <strong>Use Cold Water for Washing: </strong>Washing in cold water
          saves energy and helps prevent colors from fading. It’s usually
          effective for most loads, unless you need to sanitize items.
          <br />
          <br />
          <Typography fontWeight={500} variant="h4" color="#2E689B" ml={-3}>
            Drying Tips <br />
          </Typography>
          <strong>Air Dry When Possible: </strong>Air drying clothes can help
          extend their lifespan and reduce wear and tear from the dryer. Hang
          delicate items and sweaters to dry flat to prevent stretching. <br />
          <strong>Use Dryer Balls: </strong>Dryer balls help to separate
          clothes, allowing hot air to circulate better, which can reduce drying
          time and soften fabrics without the need for dryer sheets. <br />
          <strong>Clean the Lint Trap: </strong>Always clean the lint trap in
          your dryer before or after every load to improve efficiency and reduce
          the risk of fire. <br />
          <strong>Dry Clothes Inside Out: </strong>Turn clothes inside out
          before drying to prevent fading and reduce wear on the outside of the
          fabric. <br />
          Special Considerations <br />
          <strong>Wash New Clothes Separately: </strong>New clothes may bleed
          dye, so wash them separately the first few times to avoid color
          transfer.
          <br />
          <strong>Use Fabric Softener Wisely: </strong>Fabric softeners can help
          reduce static and make clothes feel softer, but they can also build up
          over time and reduce the effectiveness of water-absorbent fabrics like
          towels. <br />
          <strong>Iron and Fold Promptly: </strong>Remove clothes from the dryer
          or drying rack promptly to minimize wrinkles. Iron and fold clothes as
          soon as they’re dry to keep them looking fresh. <br />
          <strong>Consider Washing Bags: </strong>Use mesh washing bags for
          delicate items, small pieces like socks, or anything that might snag
          or get damaged in the wash. <br />
          <br />
          <Typography fontWeight={500} variant="h4" color="#2E689B" ml={-3}>
            Eco-Friendly Tips
          </Typography>
          <strong>Reduce Detergent Use: </strong>Use the recommended amount of
          detergent; more isn’t necessarily better and can lead to buildup in
          your washer.
          <br />
          <strong>Wash Full Loads: </strong>Maximize your washer’s efficiency by
          washing full loads to save water and energy. <br />
        </Typography>
      </Box>
    </>
  );
}

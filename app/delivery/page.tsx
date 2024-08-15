import Image from "next/image";

import Card from "@mui/material/Card";

import HeaderText from "@/components/structure/headerText";
import DeliveryVan from "@/public/assets/DeliveryVan.jpg";

export default function Delivery() {
  return (
    <>
      <Card>
        <Image src={DeliveryVan} alt="Header Image" height={100} width={2000} />
      </Card>
      <HeaderText title="Laundry Delievered Straight to You" />
    </>
  );
}

import Image from "next/image";

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
      <HeaderText title="Avoid Frustration" />
    </>
  );
}

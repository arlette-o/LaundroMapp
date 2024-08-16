import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

import Washer from "@/components/Washer";
import Dryer from "@/components/Dryer";
import HeaderText from "@/components/headerText";

import SeatingArea from "@/public/assets/SeatingArea.png";
import SeatKidArea from "@/public/assets/SeatingKidsArea.png";
import Image from "next/image";

export default function Machines() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <HeaderText title="Machines" />{" "}
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid container rowSpacing={2} padding={12}>
          <Grid item xs={5}>
            <Image src={SeatingArea} alt="seating area image" />
          </Grid>
          {/*Dryer Row */}
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column" ml={2}>
              <ButtonGroup variant="contained" disableElevation>
                {Array.from(Array(10)).map((_) => (
                  <Dryer placement="top" title="Out of service" ID={300} />
                ))}
              </ButtonGroup>
              <ButtonGroup variant="contained" disableElevation>
                {Array.from(Array(10)).map((_) => (
                  <Dryer placement="bottom" title="Out of service" ID={300} />
                ))}
              </ButtonGroup>
            </Box>
          </Grid>
          {/*Washer Row 1*/}
          <Grid item xs={1.75}>
            <ButtonGroup orientation="vertical" disableElevation>
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
            <ButtonGroup disableElevation orientation="vertical">
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
          </Grid>
          {/*Washer Row 2*/}
          <Grid item xs={1.75}>
            <ButtonGroup orientation="vertical" disableElevation>
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
            <ButtonGroup disableElevation orientation="vertical">
              {Array.from(Array(4)).map((_) => (
                <Washer placement="right" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
          </Grid>
          {/*Washer Row 3*/}
          <Grid item xs={1.75}>
            <ButtonGroup orientation="vertical" disableElevation>
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
            <ButtonGroup disableElevation orientation="vertical">
              {Array.from(Array(4)).map((_) => (
                <Washer placement="right" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
          </Grid>
          {/*Washer Row 4*/}
          <Grid item xs={1.75}>
            <ButtonGroup orientation="vertical" disableElevation>
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
            <ButtonGroup disableElevation orientation="vertical">
              {Array.from(Array(4)).map((_) => (
                <Washer placement="right" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
          </Grid>
          {/*Washer Row 5*/}
          <Grid item xs={1.75}>
            <ButtonGroup orientation="vertical" disableElevation>
              {Array.from(Array(4)).map((_) => (
                <Washer placement="left" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
            <ButtonGroup disableElevation orientation="vertical">
              {Array.from(Array(4)).map((_) => (
                <Washer placement="right" title="Out of Service" ID={120} />
              ))}
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <Image src={SeatKidArea} alt="Seating and Kids Area" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

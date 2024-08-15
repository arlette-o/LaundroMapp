import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

import Washer from "@/components/Washer";
import Dryer from "@/components/Dryer";
import HeaderText from "@/components/structure/headerText";

export default function Machines() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <HeaderText title="Machines" />{" "}
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Grid container rowSpacing={10} padding={12}>
          <Grid item xs={5}></Grid>
          {/*Dryer Row */}
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <ButtonGroup variant="contained" disableElevation>
                {Array.from(Array(8)).map((_) => (
                  <Dryer placement="top" title="Out of service" ID={300} />
                ))}
              </ButtonGroup>
              <ButtonGroup variant="contained" disableElevation>
                {Array.from(Array(8)).map((_) => (
                  <Dryer placement="bottom" title="Out of service" ID={300} />
                ))}
              </ButtonGroup>
            </Box>
          </Grid>
          {/*Washer Row 1*/}
          <Grid item xs={2}>
            <Box display="flex">
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
            </Box>
          </Grid>
          {/*Washer Row 2*/}
          <Grid item xs={2}>
            <Box display="flex">
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
            </Box>
          </Grid>
          {/*Washer Row 3*/}
          <Grid item xs={2}>
            <Box display="flex">
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
            </Box>
          </Grid>
          {/*Washer Row 4*/}
          <Grid item xs={2}>
            <Box display="flex">
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

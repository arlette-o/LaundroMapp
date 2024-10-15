"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

import Washer from "@/components/Washer";
import Dryer from "@/components/Dryer";
import HeaderText from "@/components/headerText";

import SeatingArea from "@/public/assets/SeatingArea.png";
import SeatKidArea from "@/public/assets/SeatingKidsArea.png";
import Image from "next/image";

import Machine from "../../components/types/machines";

export default function Machines() {
  const [machines, setMachines] = useState<Machine[]>([]);
  let washerID = 99;
  let dryerID = 199;
  let dryerStart = 39;
  let washerStart = -1;

  /*  Fetches data to display on the Machines page:
   - availability
   - time left on reservations/durations */
  const fetchMachineData = async () => {
    const response = await fetch("http://localhost:3000/api/machines", {
      cache: "no-store",
    });

    const data = await response.json();
    setMachines(data);
  };

  useEffect(() => {
    fetchMachineData();
  }, []);
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <HeaderText title="Machines" />{" "}
      </Box>
      {machines.length ? (
        <Box display="flex" justifyContent="center">
          <Grid container rowSpacing={2} padding={12}>
            <Grid item xs={5}>
              <Image src={SeatingArea} alt="seating area image" />
            </Grid>
            {/*Dryer Row */}
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column" ml={2}>
                <ButtonGroup variant="contained" disableElevation>
                  {Array.from(Array(10)).map((_) => {
                    dryerID++;
                    dryerStart++;
                    return (
                      <Dryer
                        key={dryerID}
                        placement="top"
                        title="Out of service"
                        ID={dryerID}
                        dryerData={machines[dryerStart]}
                      />
                    );
                  })}
                </ButtonGroup>
                <ButtonGroup variant="contained" disableElevation>
                  {Array.from(Array(10)).map((_) => {
                    dryerID++;
                    dryerStart++;
                    return (
                      <Dryer
                        key={dryerID}
                        placement="bottom"
                        title="Out of service"
                        ID={dryerID}
                        dryerData={machines[dryerStart]}
                      />
                    );
                  })}
                </ButtonGroup>
              </Box>
            </Grid>
            {/*Washer Row 1*/}
            <Grid item xs={1.75}>
              <ButtonGroup orientation="vertical" disableElevation>
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="left"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
              <ButtonGroup disableElevation orientation="vertical">
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="right"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
            </Grid>
            {/*Washer Row 2*/}
            <Grid item xs={1.75}>
              <ButtonGroup orientation="vertical" disableElevation>
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="left"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
              <ButtonGroup disableElevation orientation="vertical">
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="right"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
            </Grid>
            {/*Washer Row 3*/}
            <Grid item xs={1.75}>
              <ButtonGroup orientation="vertical" disableElevation>
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="left"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
              <ButtonGroup disableElevation orientation="vertical">
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="right"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
            </Grid>
            {/*Washer Row 4*/}
            <Grid item xs={1.75}>
              <ButtonGroup orientation="vertical" disableElevation>
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="left"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
              <ButtonGroup disableElevation orientation="vertical">
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="right"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
            </Grid>
            {/*Washer Row 5*/}
            <Grid item xs={1.75}>
              <ButtonGroup orientation="vertical" disableElevation>
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="left"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
              <ButtonGroup disableElevation orientation="vertical">
                {Array.from(Array(4)).map((_) => {
                  washerID++;
                  washerStart++;
                  return (
                    <Washer
                      key={washerID}
                      placement="right"
                      title="Out of Service"
                      ID={washerID}
                      washerData={machines[washerStart]}
                    />
                  );
                })}
              </ButtonGroup>
            </Grid>
            <Grid item xs={2}>
              <Image src={SeatKidArea} alt="Seating and Kids Area" />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Skeleton variant="rounded" width={210} height={60} />
      )}
    </>
  );
}

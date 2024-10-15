"use client";

import { useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import Machine from "../components/types/machines";

import UnavailableDryer from "@/public/assets/UnavailableDryer.svg";
import Available from "@/public/assets/AvailableDryer.svg";
import Reserved from "@/public/assets/ReservedDryer.svg";
import InUse from "@/public/assets/InUseDryer.svg";

interface DryerProps {
  placement:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top"
    | undefined;
  title: String;
  ID: Number;
  dryerData: Machine;
}

export default function Dryer({ placement, title, ID, dryerData }: DryerProps) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
        <Tooltip
          arrow
          title={title}
          placement={placement}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          open={open}
          onClose={handleTooltipClose}
          PopperProps={{
            disablePortal: true,
          }}
        >
          <IconButton onClick={handleTooltipOpen}>
            {dryerData.unavailable && <UnavailableDryer />}
            {dryerData.available && <Available />}
            {dryerData.reserved && <Reserved />}
            {dryerData.inUse && <InUse />}
          </IconButton>
        </Tooltip>
        <Chip label={dryerData.ID} size="small" />
      </Box>
    </ClickAwayListener>
  );
}

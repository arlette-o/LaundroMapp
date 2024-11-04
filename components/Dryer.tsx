"use client";

import { useState, useEffect } from "react";

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

import ChipColorProps from "@/components/types/chipColor";
import PlacementProps from "./types/placement";

interface DryerProps {
  placement: PlacementProps;
  dryerData: Machine;
}

export default function Dryer({ placement, dryerData }: DryerProps) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<ChipColorProps>("unavailable");
  const [message, setMessage] = useState<String>("Out of Service");

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const determineAvailability = () => {
    switch (true) {
      case dryerData.available:
        setColor("available");
        setMessage("Machine Available");
        break;
      case dryerData.inUse:
        setColor("inuse");
        setMessage("Machine in use for: ");
        break;
      case dryerData.reserved:
        setColor("reserved");
        setMessage("Machine reserved for: ");
        break;
      default:
        setColor("unavailable");
        setMessage("Out of Service");
        break;
    }
  };

  useEffect(() => {
    determineAvailability();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
        {placement === "top" && (
          <Chip label={dryerData.ID} size="small" color={color} />
        )}
        <Tooltip
          arrow
          title={message}
          placement={placement}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          open={open}
          onClose={handleTooltipClose}
          PopperProps={{
            disablePortal: true,
          }}
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 16],
                  },
                },
              ],
            },
          }}
        >
          <IconButton onClick={handleTooltipOpen}>
            {dryerData.unavailable && <UnavailableDryer />}
            {dryerData.available && <Available />}
            {dryerData.reserved && <Reserved />}
            {dryerData.inUse && <InUse />}
          </IconButton>
        </Tooltip>
        {placement === "bottom" && (
          <Chip label={dryerData.ID} size="small" color={color} />
        )}
      </Box>
    </ClickAwayListener>
  );
}

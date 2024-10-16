"use client";

import { useEffect, useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

import Machine from "../components/types/machines";

import UnavailableWasher from "@/public/assets/UnavailableWash.svg";
import Available from "@/public/assets/AvailableWash.svg";
import Reserved from "@/public/assets/ReservedWash.svg";
import InUse from "@/public/assets/InUseWash.svg";

import ChipColorProps from "@/components/types/chipColor";
import PlacementProps from "./types/placement";

interface WasherProps {
  placement: PlacementProps;
  title: String;
  ID: Number;
  washerData: Machine;
}

export default function Washer({ placement, washerData }: WasherProps) {
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
      case washerData.available:
        setColor("available");
        setMessage("Machine Available");
        break;
      case washerData.inUse:
        setColor("inuse");
        setMessage("Machine in use for: ");
        break;
      case washerData.reserved:
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
  }, []);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        {placement === "left" && <Chip label={washerData.ID} color={color} />}
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
        >
          <IconButton onClick={handleTooltipOpen}>
            {washerData.available && <Available />}
            {washerData.reserved && <Reserved />}
            {washerData.inUse && <InUse />}
            {washerData.unavailable && <UnavailableWasher />}
          </IconButton>
        </Tooltip>
        {placement === "right" && <Chip label={washerData.ID} color={color} />}
      </div>
    </ClickAwayListener>
  );
}

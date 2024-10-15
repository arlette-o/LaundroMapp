"use client";

import React, { FunctionComponent, useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

import Machine from "../components/types/machines";

import UnavailableWasher from "@/public/assets/UnavailableWash.svg";
import Available from "@/public/assets/AvailableWash.svg";
import Reserved from "@/public/assets/ReservedWash.svg";
import InUse from "@/public/assets/InUseWash.svg";

interface WasherProps {
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
  washerData: Machine;
}

export default function Washer({
  placement,
  title,
  ID,
  washerData,
}: WasherProps) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        {placement === "left" && <Chip label={washerData.ID} />}
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
            {washerData.available && <Available />}
            {washerData.reserved && <Reserved />}
            {washerData.inUse && <InUse />}
            {washerData.unavailable && <UnavailableWasher />}
          </IconButton>
        </Tooltip>
        {placement === "right" && <Chip label={washerData.ID} />}
      </div>
    </ClickAwayListener>
  );
}

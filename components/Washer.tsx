"use client";

import { useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

import UnavailableWasher from "@/public/assets/UnavailableWash.svg";

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
}

export default function Washer({ placement, title, ID }: WasherProps) {
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
        {placement === "left" && <Chip label={ID.toString()} />}
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
            <UnavailableWasher />
          </IconButton>
        </Tooltip>
        {placement === "right" && <Chip label={ID.toString()} />}
      </div>
    </ClickAwayListener>
  );
}

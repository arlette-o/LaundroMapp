"use client";

import { useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import UnavailableDryer from "@/public/assets/UnavailableDryer.svg";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

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
}

export default function Dryer({ placement, title, ID }: DryerProps) {
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
            <UnavailableDryer />
          </IconButton>
        </Tooltip>
        <Chip label={ID.toString()} size="small" />
      </Box>
    </ClickAwayListener>
  );
}

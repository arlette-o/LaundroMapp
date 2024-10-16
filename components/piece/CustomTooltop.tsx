import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";

export default function CustomToolTip({ message, placement, children }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
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
      {children}
    </Tooltip>
  );
}

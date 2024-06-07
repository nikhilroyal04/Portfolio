import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton, Tooltip } from "@mui/material";

const Button = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tooltip title="Click for Top">
      <IconButton
        onClick={handleScrollToTop}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          color: 'black',
          bgcolor: 'white', 
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Button;

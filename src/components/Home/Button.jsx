import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, Tooltip } from "@mui/material";

const Button = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <Tooltip title="Click to scroll to top">
        <IconButton
          onClick={handleScrollToTop}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            color: "black",
            bgcolor: "white",
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
    )
  );
};

export default Button;

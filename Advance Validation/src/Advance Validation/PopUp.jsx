import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Box, Typography, Fade } from "@mui/material";

function PopUp({ flag, setFlag }) {
  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 2000);

      return () => clearTimeout(timer); // Clean up timeout on unmount or flag change
    }
  }, [flag, setFlag]);

  return flag
    ? createPortal(
        <Fade in={flag}>
          <Box
            sx={{
              position: "fixed",
              bottom: "3rem",
              left: "10px",
              backgroundColor: "background.paper",
              boxShadow: 3,
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              zIndex: 1300,
              width: "fit-content",
              backgroundColor:"green"
            }}
          >
            <Typography
              variant="subtitle1"
              color="white"
              fontWeight="bold"
              

            >
              Submit Successfully
            </Typography>
          </Box>
        </Fade>,
        document.querySelector("#popUp") || document.body
      )
    : null;
}

export default PopUp;

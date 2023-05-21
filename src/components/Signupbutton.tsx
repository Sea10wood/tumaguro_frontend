import { Button } from "@mui/material";
import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";

import FemaleWorkerCheckingData from "../images/female-worker-checking-data.png";

export default function SignupButton() {
  return (
    <Typography style={{ textAlign: "center" }}>
      <Box component="div" p={2} padding="0">
        <Button
          color="primary"
          sx={{
            width: "20%",
            alignItems: "center",
            margin: "0px",
          }}
          variant="text"
        >
          sign up
        </Button>
      </Box>
    </Typography>
  );
}

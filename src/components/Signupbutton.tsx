import { Button } from "@mui/material";
import {
  Box,
  Paper,
  Stack,
  TextField,
  Direction,
  Typography,
} from "@mui/material";
import React from "react";

import FemaleWorkerCheckingData from "../images/female-worker-checking-data.png";

export default function SignupButton() {
  return (
    <Typography style={{ textAlign: "center" }}>
      <Box component="div" p={2}>
        <Button
          color="primary"
          sx={{
            width: "20%",
            alignItems: "center",
          }}
          variant="text"
        >
          sign up
        </Button>
      </Box>
    </Typography>
  );
}

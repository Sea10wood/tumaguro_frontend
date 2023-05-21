import { Button } from "@mui/material";
import {
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
  Direction,
} from "@mui/material";
import { useState } from "react";

export default function SigninButton() {
  return (
    <h2 style={{ 
      textAlign: "center",}}>
    <Box component="div" p={2} >
    <Button
      sx={{
        width: "20%",
        alignItems: "center"
      }}
      variant="text"
    >
      sign in
    </Button>
    </Box>
          </h2>
  );
}
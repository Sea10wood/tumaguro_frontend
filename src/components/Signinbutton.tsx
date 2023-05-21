import { Button } from "@mui/material";
import {
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
  Direction,
} from "@mui/material";
import { Center } from "@react-three/drei";
import { useState } from "react";

export default function SigninButton() {
  return (
    <Typography style={{ 
      textAlign: "center",}}>
    <Box margin="0.1px" component="div" p={2} >
    <Button
      sx={{
        width: "20%",
        alignItems: "center",
        margin: "0px",
      }}
      variant="text"
    >
      sign in
    </Button>
    </Box>
          </Typography>
  );
}
import { Box } from "@mui/material";
import React from "react";
import SigninButton from "../components/Signinbutton";
import SignupButton from "../components/Signupbutton";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Style } from "@mui/icons-material";
import Image from "next/image";
import { isTemplateSpan } from "typescript";
import { useRouter } from "next/router";

export default function Toppage() {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        margin: "auto",
        marginY: "auto",
        p: 3,
        backgroundColor: "#FFFDE2",
      }}
    >
      <Box component="div" p={10} padding="40px 0px 0px">
        <Typography
          color="primary"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            margin: "0px",
          }}
          variant="h4"
        >
          にゃぁーーーーーん
        </Typography>
      </Box>
      <Box component="div" p={10} padding="0.1px" width="1px">
        <Image
          src="/cattumaguro.png"
          alt="cattumaguro"
          height={300}
          width={300}
        />
      </Box>

      <SigninButton />
      <SignupButton />
    </Paper>
  );
}
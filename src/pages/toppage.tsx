import { Box } from "@mui/material";
import SigninButton from "../components/Signinbutton";
import SignupButton from "../components/Signupbutton";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Style } from "@mui/icons-material";
import Image from "next/image";
import cattumaguro from "../images/cattumaguro.png";
import { isTemplateSpan } from "typescript";

export default function Toppage() {
  return (
      <div>
        
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
        <Box component="div" p={10}>
          <Typography
            color="primary"
            sx={{
                textAlign: "center",
                fontWeight: "bold",
            }}
            variant="h4"
            fontWeight=""
          >
            にゃーーーーーん
          </Typography>
        </Box>

        <SigninButton />
        <SignupButton />
<Image
  src={cattumaguro}
  alt="cattumaguro.png"
  height={300}
  width={300}
/>
      </Paper>
    </div>
  );
}

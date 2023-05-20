import { AdditiveAnimationBlendMode, GridHelper, PlaneHelper } from "three";
import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Diversity1 } from "@mui/icons-material";
export const Login = () => {
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const titleClass: string = "title";
  return (
    <Box
      component="div"
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#FFFDE2" }}
      display="flex"
    >
      <Paper
        sx={{
          width: "50%",
          margin: "auto",
          marginY: "auto",
          p: 3,
          backgroundColor: "#FFFDcc",
        }}
      >
        <Typography
          color="primary"
          sx={{
            //  color: "#03A40",
            textAlign: "center",
            fontWeight: "bold",
          }}
          variant="h4"
          fontWeight=""
        >
          SIGN IN
        </Typography>
        <Stack>
          <Stack p={2} spacing={2} sx={{ justifyContent: "center" }}>
            <TextField
              sx={{ backgroundColor: "#FFFDED" }}
              placeholder="必須"
              required
              id="outlined-required"
              label="メールアドレス"
            />
            <TextField
              required
              label=" パスワード　(パスワードは半角16文字以上で入力してください。) "
              type="password"
              placeholder="必須"
              sx={{ backgroundColor: "#FFFDED" }}
            />
          </Stack>
          <h2 style={{ textAlign: "center" }}>
            <Box component="div" p={2}>
              <Button
                sx={{
                  width: "20%",
                }}
                variant="contained"
              >
                送信
              </Button>
            </Box>
          </h2>
        </Stack>
      </Paper>
    </Box>
  );
};
export default Login;

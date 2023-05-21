
import React, { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SigninUser } from "../types/schema";
import axios from "axios";
import { useRouter } from "next/router";
const Signin = () => {
  const router = useRouter();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };
  const [userInput, setUserInput] = useState<SigninUser>({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (userInput.email === "") {
      return;
    } else if (userInput.password === "") {
      return;
    }
    handleSignIn();
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/signin`,
        userInput
      );
    
      if (response.status == 200) {
        localStorage.setItem("jwt", response.data.jwt);
        router.push("/todo");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              onChange={handleChange}
              name="email"
            />
            <TextField
              required
              label=" パスワード　(パスワードは半角16文字以上で入力してください。) "
              type="password"
              placeholder="必須"
              sx={{ backgroundColor: "#FFFDED" }}
              onChange={handleChange}
              name="password"
            />
          </Stack>
          <h2 style={{ textAlign: "center" }}>
            <Box component="div" p={2}>
              <Button
                onClick={handleSubmit}
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
export default Signin;

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createStyles,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { teal } from "@mui/material/colors";
import { SignpostOutlined } from "@mui/icons-material";

export const signup = () => {
  const handleLogin = async () => {};
  const handleSubmit = () => {};
  const handlechange = () => {};
  return (
    <Box
      component="div"
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#FFFDE2" }}
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
        <Box component="div" sx={{}}>
          <Typography
            color="primary"
            style={{ textAlign: "center" }}
            variant="h4"
            fontWeight="Bold"
          >
            SIGN UP
          </Typography>
          <Stack>
            <Stack p={2} spacing={2}>
              <TextField
                required
                label="ユーザーネーム"
                placeholder="必須"
                sx={{ backgroundColor: "#FFFDE2" }}
              />
              <TextField
                required
                label="メールアドレス"
                placeholder="必須"
                sx={{ backgroundColor: "#FFFDE2" }}
              />
              <TextField
                required
                label="パスワード"
                type="password"
                placeholder="必須"
                sx={{ backgroundColor: "#FFFDE2" }}

                // error
                // helperText="パスワードは半角8文字以上で入力してください"
              />
              <TextField
                required
                label="パスワード確認"
                type="password"
                placeholder="必須"
                sx={{ backgroundColor: "#FFFDE2" }}
                // error
                // helperText="パスワードは半角8文字以上で入力してください"
              />
            </Stack>
            <h2 style={{ textAlign: "center" }}>
              <Box component="div" p={2}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "20%",
                    // backgroundColor: "#03A400",
                    // "&:hover": { background: "#03A400" },
                    // "&:active": { background: "#03A400" },
                  }}
                  // onClick={handleLogin}
                >
                  送信
                </Button>
              </Box>
            </h2>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default signup;

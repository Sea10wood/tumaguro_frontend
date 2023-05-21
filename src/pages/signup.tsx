import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { SignupUser } from "../types/schema";

const Signup = () => {
    const router = useRouter();
    const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
    };
    const [userInput, setUserInput] = useState<SignupUser>({
        email: "",
        password: "",
        username: "",
    });
    const handleSubmit = () => {
        if (userInput.email === "") {
            return;
        } else if (userInput.password === "") {
            return;
        } else if (userInput.username === "") {
            return;
        }
        handleSignUp();
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

    const handleSignUp = async () => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/signup`,
                userInput
            );

            if (response.status == 200) {
                localStorage.setItem("jwt", response.data.jwt);

                handleSignIn();
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                                onChange={handlechange}
                                name="username"
                            />
                            <TextField
                                required
                                label="メールアドレス"
                                placeholder="必須"
                                sx={{ backgroundColor: "#FFFDE2" }}
                                onChange={handlechange}
                                name="email"
                            />
                            <TextField
                                required
                                label="パスワード"
                                type="password"
                                placeholder="必須"
                                sx={{ backgroundColor: "#FFFDE2" }}
                                onChange={handlechange}
                                name="password"
                            />
                        </Stack>
                        <h2 style={{ textAlign: "center" }}>
                            <Box component="div" p={2}>
                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        width: "20%",
                                    }}
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

export default Signup;

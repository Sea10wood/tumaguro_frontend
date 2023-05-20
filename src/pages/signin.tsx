import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
// import nyan from "../images/nyan.gif";

const [userID, setUserID] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const clickLogIn = async () => {
    if (userID === "") {
        setErrorMessage("UserID is empty");
        return;
    } else if (password === "") {
        setErrorMessage("password is empty");
        return;
    }
    if (userID === "") {
    }
    const res = await axios.post("login", {
        user_id: userID,
        password: password,
    });
    const obj = JSON.parse(JSON.stringify(res));
    console.log(obj.data);

    if (obj.data.Result === "Failed") {
        setErrorMessage(obj.data.Message);
        return;
    }
};

export default function Signin() {
    return (
        <Box
            component="div"
            sx={{ height: "100vh", width: "100%" }}
            variant="contained"
            size="large"
            style={{ backgroundColor: "#fffff0" }}
        >
            <Image src={nyan} alt="nyan.gif" height={150} width={150} />
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: "70vh",
                    height: "450px",
                    m: "20px auto",
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
                    alignItems="center"
                >
                    <Avatar sx={{ backgroundColor: "#ffffff" }}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography variant={"h5"} sx={{ m: "30px" }}>
                        Sign In
                    </Typography>
                </Grid>
                <TextField
                    label="Username"
                    variant="standard"
                    fullWidth
                    required
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    required
                />
                <FormControlLabel
                    labelPlacement="end"
                    label="パスワードを忘れました"
                    control={
                        <Checkbox
                            name="checkboxA"
                            size="small"
                            color="primary"
                        />
                    }
                />
                <Box mt={3} component="div">
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                    >
                        Sign In
                    </Button>
                    <Typography variant="caption">
                        <Link href="#">パスワードを忘れましたか？</Link>
                    </Typography>
                    <Typography variant="caption" display="block">
                        アカウントを持っていますか？
                        <Link href="#">アカウントを作成</Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}

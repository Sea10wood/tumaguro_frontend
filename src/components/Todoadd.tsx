import { Paper, TextField, Typography } from "@mui/material";
import Request from "./Request";

export function TodoAdd() {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                width: "80%",
                height: "40%",
                m: "5px auto",
            }}
        >
            <Typography
                variant={"h5"}
                sx={{ backgroundColor: "#ffffff", textAlign: "center" }}
            >
                Add Todo
            </Typography>
            <TextField
                id="outlined-multiline-flexible"
                label="Todo"
                multiline
                maxRows={4}
                sx={{
                    width: "100%",
                    textAlign: "center",
                    m: "0 auto",
                }}
            />
            {/* <DatePick /> */}
            <Request />
        </Paper>
    );
}

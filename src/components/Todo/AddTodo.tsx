import {
    Box,
    Button,
    Modal,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DatePick from "../common/DatePick";

export default function AddTodo() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                Open
            </Button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper
                    sx={{
                        height: "40%",
                        width: "50vw",
                        minWidth: "300px",
                        margin: "auto",
                        minHeight: "500px",
                    }}
                >
                    <Stack
                        sx={{
                            // width: 400,
                            // margin: "10px auto",
                            position: "relative",
                        }}
                        spacing={3}
                        p={2}
                    >
                        <Image
                            src="/images/catclose.png"
                            alt="cat close.png"
                            width={100}
                            height={100}
                            style={{
                                textAlign: "right",
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                        />

                        <h4>Todoを追加</h4>

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Todo"
                            multiline
                            maxRows={1}
                            sx={{
                                width: "100%",
                                minWidth: "200px",
                                maxWidth: "300px",
                                textAlign: "center",
                                m: "auto",
                            }}
                        />
                        <Box component="div">
                            <Typography variant="h6">開始日時を追加</Typography>
                            <DatePick />
                        </Box>
                        <Box component="div">
                            <Typography variant="h6">終了日時を追加</Typography>
                            <DatePick />
                        </Box>
                        <Button
                            sx={{
                                textAlign: "right",
                                right: 0,
                            }}
                        >
                            Send
                        </Button>
                    </Stack>
                </Paper>
            </Modal>
        </div>
    );
}

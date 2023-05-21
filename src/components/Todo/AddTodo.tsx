import {
    Box,
    Button,
    Modal,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "../common/CustomButton";
import DatePick from "../common/DatePick";

export default function AddTodo({ refetch }: { refetch: () => Promise<void> }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scheduleName, setScheduleName] = useState("");
    const [deadLine, setDeadLine] = useState<Date | null>(new Date());
    const sendAddTask = async () => {
        const jwt = localStorage.getItem("jwt");
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/task/add`,
                {
                    title: scheduleName,
                    dead_line: deadLine,
                    comment: "",
                },
                { headers: { Authorization: `Bearer ${jwt}` } }
            );
            refetch();
            setIsOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <CustomButton
                onclick={() => {
                    setIsOpen(!isOpen);
                }}
                primarycolor="#C5956B"
                secondarycolor="#C37349"
                buttonname="TODO"
            />
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
                            position: "relative",
                        }}
                        spacing={3}
                        p={2}
                    >
                        <Button
                            sx={{
                                textAlign: "right",
                                position: "absolute",
                                right: 0,
                                top: 0,
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            <Image
                                src="/images/catclose.png"
                                alt="cat close.png"
                                width={100}
                                height={100}
                            />
                        </Button>

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
                            onChange={(event) =>
                                setScheduleName(event.target.value)
                            }
                        />
                        <Box component="div">
                            <Typography variant="h6">終了日時を追加</Typography>
                            <DatePick
                                selectedDate={deadLine}
                                setDate={setDeadLine}
                            />
                        </Box>
                        <CustomButton
                            onclick={() => sendAddTask()}
                            primarycolor="#C5956B"
                            secondarycolor="#C37349"
                            buttonname="send"
                        />
                    </Stack>
                </Paper>
            </Modal>
        </div>
    );
}

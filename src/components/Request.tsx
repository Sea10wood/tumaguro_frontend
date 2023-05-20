import { Box, Button, Modal, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Request() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                Open modal
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
                        width: "30%",
                        minWidth: "300px",
                        margin: "auto",
                    }}
                >
                    <Box
                        component="div"
                        sx={{ width: 400, margin: "10px auto" }}
                        p={2}
                    >
                        <Button sx={{ textAlign: "right" }}>Close</Button>
                        <h4 id="parent-modal-title">スケジュールを共有</h4>
                        {/* <p id="parent-modal-description">
                            送信相手、スケジュール日時の表示
                        </p> */}

                        <TextField
                            id="outlined-multiline-flexible"
                            label="UserName"
                            multiline
                            maxRows={1}
                            sx={{
                                width: "100%",
                                maxWidth: "250px",
                                textAlign: "center",
                                m: " auto",
                            }}
                        />
                        <h4 id="parent-modal-title">開始日時を追加</h4>
                        <h4 id="parent-modal-title">終了日時を追加</h4>
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
}

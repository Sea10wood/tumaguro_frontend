import { GetInvitationResultOne } from "@/types/schema";
import {
    Box,
    Button,
    List,
    ListItem,
    Modal,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CustomButton } from "../common/CustomButton";
import { CustomDate } from "../common/CustomDate";

export const InvitedSchedule = ({
    invitations,
}: {
    invitations: GetInvitationResultOne[];
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const receptInvite = async (id: string, is_recept: boolean) => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/invitation/recept/${id}`,
                { is_recept },
                { headers: { Authorization: `Bearer ${token}` } }
            );
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <CustomButton
                onclick={() => setIsOpen(!isOpen)}
                primarycolor="#C5956B"
                secondarycolor="#C37349"
                buttonname="INVITED"
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
                        position: "relative",
                        p: 2,
                    }}
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
                    {invitations.length != 0 ? (
                        <List>
                            {invitations?.map(
                                ({ id, schedule, sender_email }) => (
                                    <ListItem key={id}>
                                        <Stack>
                                            <Typography>
                                                {sender_email}
                                                から招待が届いています
                                            </Typography>
                                            <Stack>
                                                <Typography>
                                                    {schedule.title}
                                                </Typography>
                                                <Stack direction="row">
                                                    <CustomDate
                                                        dateString={
                                                            schedule.start
                                                        }
                                                    />
                                                    ~
                                                    <CustomDate
                                                        dateString={
                                                            schedule.start
                                                        }
                                                    />
                                                </Stack>
                                            </Stack>
                                            <CustomButton
                                                onclick={() =>
                                                    receptInvite(id, true)
                                                }
                                                primarycolor="#C5956B"
                                                secondarycolor="#C37349"
                                                buttonname="承諾"
                                            />
                                            <CustomButton
                                                onclick={() =>
                                                    receptInvite(id, false)
                                                }
                                                primarycolor="gray"
                                                secondarycolor="black"
                                                buttonname="拒否"
                                            />
                                        </Stack>
                                    </ListItem>
                                )
                            )}
                        </List>
                    ) : (
                        <Box component="div">
                            <Typography>届いている招待はありません</Typography>
                        </Box>
                    )}
                </Paper>
            </Modal>
        </>
    );
};

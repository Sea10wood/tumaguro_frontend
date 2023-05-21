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

export const InvitingSchedule = ({
    invitations,
}: {
    invitations: GetInvitationResultOne[];
}) => {
    console.log(invitations);
    console.log(invitations.length);
    const [isOpen, setIsOpen] = useState(false);
    const cancelInvite = async (id: string) => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/invitation/${id}`,
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
                buttonname="INVITING"
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
                        padding: 2,
                        position: "relative",
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
                                ({
                                    id,
                                    schedule,
                                    recipient_email,
                                    is_recept,
                                }) => (
                                    <ListItem key={id}>
                                        <Stack>
                                            <Typography>
                                                {recipient_email}
                                                を招待しています
                                            </Typography>
                                            <Stack>
                                                <Typography>
                                                    {schedule.title}
                                                </Typography>
                                                <Stack direction="row">
                                                    <Stack
                                                        direction="row"
                                                        sx={{
                                                            alignItems:
                                                                "center",
                                                        }}
                                                        spacing={1}
                                                    >
                                                        <CustomDate
                                                            dateString={
                                                                schedule.start
                                                            }
                                                        />
                                                        <Typography variant="caption">
                                                            から
                                                        </Typography>
                                                        <CustomDate
                                                            dateString={
                                                                schedule.start
                                                            }
                                                        />
                                                    </Stack>
                                                    {is_recept == null ? (
                                                        <CustomButton
                                                            onclick={() =>
                                                                cancelInvite(id)
                                                            }
                                                            buttonname="CANCEL"
                                                            primarycolor="gray"
                                                            secondarycolor="black"
                                                        />
                                                    ) : (
                                                        <Typography>
                                                            拒否されました
                                                        </Typography>
                                                    )}
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </ListItem>
                                )
                            )}
                        </List>
                    ) : (
                        <Box component="div">
                            <Typography>
                                招待中のスケジュールはありません
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Modal>
        </>
    );
};

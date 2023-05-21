import { Schedule } from "@/types/schema";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import {
    Button,
    Modal,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomButton } from "../common/CustomButton";
import { CustomDate } from "../common/CustomDate";

export const ScheduleCalendar = ({ event }: { event: Schedule[] }) => {
    const [schedule, setSchedule] = useState<null | Schedule>(null);
    const [scheduleDetail, setScheduleDetail] = useState<null | Schedule>(null);
    const [inviteUserEmail, setInviteUserEmail] = useState("");
    const handleScheduleHover = (schedule: any) => {
        setSchedule({
            ...schedule.event.extendedProps,
            title: schedule.event.title,
            start: schedule.event.startStr,
            end: schedule.event.endStr,
        });
    };

    const handleScheduleClick = (schedule: any) => {
        setScheduleDetail({
            ...schedule.event.extendedProps,
            start: schedule.event.startStr,
            end: schedule.event.endStr,
            id: schedule.event.id,
        });
    };
    const inviteUser = async () => {
        const jwt = localStorage.getItem("jwt");
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/invitation/add`,
                {
                    recipient_email: inviteUserEmail,
                    schedule_id: scheduleDetail!.id,
                },
                { headers: { Authorization: `Bearer ${jwt}` } }
            );
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setSchedule(null);
        }, 1000);
        return () => clearTimeout(timer);
    }, [schedule]);

    return (
        <>
            {schedule != null && (
                <Paper
                    sx={{
                        position: "absolute",
                        zIndex: 100,
                        right: 0,
                        padding: 2,
                    }}
                >
                    <Typography>{schedule?.title}</Typography>
                    <Typography>
                        開始:
                        {schedule != null && (
                            <CustomDate dateString={schedule?.start} />
                        )}
                    </Typography>

                    <Typography>
                        終了:
                        {schedule != null && schedule?.end != "" && (
                            <CustomDate dateString={schedule?.end} />
                        )}
                    </Typography>
                    <Typography>備考:{schedule?.comment}</Typography>
                </Paper>
            )}
            <Modal
                open={scheduleDetail != null}
                onClose={() => setScheduleDetail(null)}
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
                        width: "40vw",
                        minWidth: "200px",
                        margin: "auto",
                        minHeight: "200px",
                        padding: 5,
                    }}
                >
                    <Stack direction="row" spacing={4} position="relative">
                        <Button
                            sx={{
                                textAlign: "right",
                                position: "absolute",
                                right: -50,
                                top: -50,
                            }}
                            onClick={() => setScheduleDetail(null)}
                        >
                            <Image
                                src="/images/catclose.png"
                                alt="cat close.png"
                                width={50}
                                height={50}
                            />
                        </Button>
                        <Stack spacing={3}>
                            <Typography>{scheduleDetail?.title}</Typography>
                            <Stack direction="row">
                                <Typography>開始:</Typography>
                                <CustomDate
                                    dateString={scheduleDetail?.start ?? ""}
                                />
                            </Stack>
                            <Stack direction="row">
                                <Typography>終了:</Typography>
                                <CustomDate
                                    dateString={scheduleDetail?.end ?? ""}
                                />
                            </Stack>
                            <Stack direction="row">
                                <Typography>作成日時:</Typography>
                                <CustomDate
                                    dateString={
                                        scheduleDetail?.created_at ?? ""
                                    }
                                />
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField
                                maxRows={1}
                                sx={{
                                    width: "100%",
                                    minWidth: "200px",
                                    maxWidth: "300px",
                                    textAlign: "center",
                                    m: "auto",
                                }}
                                label="MAIL ADDRESS"
                                onChange={(event) =>
                                    setInviteUserEmail(event.target.value)
                                }
                            />
                            <CustomButton
                                onclick={() => {
                                    inviteUser();
                                }}
                                primarycolor="#C5956B"
                                secondarycolor="#C37349"
                                buttonname="INVITE"
                            />
                        </Stack>
                    </Stack>
                </Paper>
            </Modal>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ja"
                selectable
                eventMouseEnter={handleScheduleHover}
                eventClick={handleScheduleClick}
                events={event}
            />
        </>
    );
};

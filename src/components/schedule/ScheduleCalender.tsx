import { Schedule } from "@/types/schema";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CustomDate } from "../common/CustomDate";

export const ScheduleCalendar = () => {
    const [event, setEvent] = useState();
    const [schedule, setSchedule] = useState<null | Schedule>(null);
    useEffect(() => {
        const getEvent = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/schedule/my`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setEvent(response.data.schedules);
            } catch (err) {
                console.log(err);
            }
        };
        getEvent();
    }, []);
    const handleScheduleClick = (schedule: any) => {
        setSchedule({
            ...schedule.event.extendedProps,
            start: schedule.event.startStr,
            end: schedule.event.endStr,
        });
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

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale="ja"
                selectable
                eventMouseEnter={handleScheduleClick}
                events={event}
            />
        </>
    );
};

import AddTodo from "@/components/Todo/AddTodo";
import Cat from "@/components/Todo/Cat";
import TodoView from "@/components/Todo/TodoView";
import { AddSchedule } from "@/components/schedule/AddSchedule";
import { InvitedSchedule } from "@/components/schedule/InvitedSchedule";
import { InvitingSchedule } from "@/components/schedule/InvitingSchedule";
import { ScheduleCalendar } from "@/components/schedule/ScheduleCalender";
import { GetInvitationResultOne, Schedule, Task } from "@/types/schema";
import { Box, Stack } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [event, setEvent] = useState<Schedule[]>([]);
    const [invited, setInvited] = useState<GetInvitationResultOne[]>([]);
    const [inviting, setInviting] = useState<GetInvitationResultOne[]>([]);
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
    const getTask = async () => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/task/my`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks(response.data.tasks);
        } catch (err) {
            console.log(err);
        }
    };
    const getInvited = async () => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/invitation/me/invited`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setInvited(response.data.invitations);
        } catch (err) {
            console.log(err);
        }
    };
    const getInviting = async () => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/invitation/me/inviting`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setInviting(response.data.invitations);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getEvent();
        getTask();
        getInvited();
        getInviting();
    }, []);
    return (
        <Stack direction="row">
            <Box component="div" sx={{ height: "100vh", width: "50%" }}>
                <Canvas>
                    <OrbitControls />
                    <Cat cats={tasks} />
                    <directionalLight />
                </Canvas>
            </Box>
            <Box
                component="div"
                sx={{ height: "100vh", width: "50%" }}
                style={{
                    backgroundColor: "#fffff0",
                }}
            >
                <ScheduleCalendar event={event} />
                <Stack direction="row">
                    <AddTodo refetch={getTask} />
                    <AddSchedule refetch={getEvent} />
                    <Box component="div" position="relative">
                        {invited.length != 0 && (
                            <Box
                                component="div"
                                position="absolute"
                                sx={{
                                    right: 5,
                                    top: 5,
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "100px",
                                    backgroundColor: "skyblue",
                                    border: "3px white solid",
                                    zIndex: 200,
                                }}
                            />
                        )}
                        <InvitedSchedule invitations={invited} />
                    </Box>
                    <InvitingSchedule invitations={inviting} />
                </Stack>
                <TodoView tasks={tasks} />
            </Box>
        </Stack>
    );
}

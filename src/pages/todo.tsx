import AddTodo from "@/components/Todo/AddTodo";
import Cat from "@/components/Todo/Cat";
import TodoView from "@/components/Todo/TodoView";
import { AddSchedule } from "@/components/schedule/AddSchedule";
import { ScheduleCalendar } from "@/components/schedule/ScheduleCalender";
import { Schedule, Task } from "@/types/schema";
import { Box, Stack } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [event, setEvent] = useState<Schedule[]>([]);
    const getEvent = async () => {
        try {
            const token = localStorage.getItem("jwt");
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/schedule/my`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response.data);
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
    useEffect(() => {
        getEvent();
        getTask();
    }, []);
    return (
        <Stack direction="row">
            <Box component="div" sx={{ height: "100vh", width: "60%" }}>
                <Canvas>
                    <OrbitControls />
                    <Cat cats={tasks} />
                    <directionalLight />
                </Canvas>
            </Box>
            <Box
                component="div"
                sx={{ height: "100vh", width: "40%" }}
                style={{
                    backgroundColor: "#fffff0",
                }}
            >
                <ScheduleCalendar event={event} />
                <Stack direction="row">
                    <AddTodo refetch={getTask} />
                    <AddSchedule refetch={getEvent} />
                </Stack>
                <TodoView />
            </Box>
        </Stack>
    );
}

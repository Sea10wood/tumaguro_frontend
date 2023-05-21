import AddTodo from "@/components/Todo/AddTodo";
import Cat from "@/components/Todo/Cat";
import TodoView from "@/components/Todo/TodoView";
import { ScheduleCalendar } from "@/components/schedule/ScheduleCalender";
import { Task } from "@/types/schema";
import { Box, Stack } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        const getTask = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/task/my`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                console.log(response);
                setTasks(response.data.tasks);
            } catch (err) {
                console.log(err);
            }
        };
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
                {/* <Image src={nyan} alt="nyan.gif" height={150} width={150} /> */}
                <ScheduleCalendar />
                <AddTodo />
                <TodoView />
            </Box>
        </Stack>
    );
}

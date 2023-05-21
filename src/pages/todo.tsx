import Cat from "@/components/Cat";
import { ScheduleCalendar } from "@/components/schedule/ScheduleCalender";
import { TodoAdd } from "@/components/Todoadd";
import TodoView from "@/components/TodoView";
import { Box, Stack } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Todo() {
    return (
        <Stack direction="row">
            <Box component="div" sx={{ height: "100vh", width: "60%" }}>
                <Canvas>
                    <OrbitControls />
                    <Cat />
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
                <TodoAdd />
                <TodoView />
            </Box>
        </Stack>
    );
}

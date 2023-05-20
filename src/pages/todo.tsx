import { TodoAdd } from "@/components/Todoadd";
import { ScheduleCalendar } from "@/components/schedule/ScheduleCalender";
import { Box, Stack } from "@mui/material";
// import DataPicker from "../components/DataPicker";
export default function Todo() {
    return (
        <Stack direction="row">
            <Box component="div" sx={{ height: "100vh", width: "60%" }}></Box>
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
            </Box>
        </Stack>
    );
}

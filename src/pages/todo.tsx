import { TodoAdd } from "@/components/Todoadd";
import { DatePicker } from "@mui/lab";
import { Box } from "@mui/material";
// import DataPicker from "../components/DataPicker";
export default function Todo() {
    return (
        <Box
            component="div"
            sx={{ height: "100vh", width: "40%" }}
            style={{
                backgroundColor: "#fffff0",
            }}
        >
            {/* <Image src={nyan} alt="nyan.gif" height={150} width={150} /> */}
            <TodoAdd />
        </Box>
    );
}

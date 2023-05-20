import { TodoAdd } from "@/components/Todoadd";
import { Box } from "@mui/material";
// import DataPicker from "../components/DataPicker";
export default function Todo() {
    return (
        <div>
            {/* <Threejs /> */}
            <Box
                component="div"
                sx={{ height: "80vh", width: "40%" }}
                style={{
                    backgroundColor: "#fffff0",
                    margin: "0",
                }}
            >
                {/* <Image src={nyan} alt="nyan.gif" height={150} width={150} /> */}
                <TodoAdd />
            </Box>
        </div>
    );
}

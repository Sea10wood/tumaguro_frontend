import { Box } from "@mui/material";
import Image from "next/image";

export const Header = () => {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: "#fffff0",
                width: "100%",
                height: "6vh",
                margin: "0 0",
            }}
        >
            <Image
                src="/images/nyan.gif"
                alt="nyan.gif"
                height={45}
                width={45}
            />
        </Box>
    );
};

import { Box, Stack } from "@mui/material";
import React from "react";
import { Header } from "./Header";
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack p={0}>
            <Header />
            <Box
                component="div"
                sx={{ height: "92vh", backgroundColor: "#FFFDE2" }}
            >
                {children}
            </Box>
        </Stack>
    );
};

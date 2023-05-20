import { Box, Stack } from "@mui/material";
import React from "react";
import { Header } from "./Header";
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack>
            <Header />
            <Box component="div">{children}</Box>
        </Stack>
    );
};

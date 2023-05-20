import { createTheme as muiCreateTheme } from "@mui/material";

export const createTheme = () => {
    return muiCreateTheme({
        palette: {
            primary: {
                main: "#2e7d32",
                light: "#4caf50",
                dark: "#1b5e20",
                contrastText: "#ffffff",
            },
            secondary: {
                main: "#ed6c02",
                light: "#ff9800",
                dark: "#e65100",
                contrastText: "#ffffff",
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                    },
                },
            },
        },
    });
};

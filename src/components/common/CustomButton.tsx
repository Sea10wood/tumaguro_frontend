import { Box, Button, CircularProgress, Typography } from "@mui/material";

export const CustomButton = ({ buttonName }: { buttonName: string }) => {
    return (
        <Button
            sx={{
                position: "relative",
                borderRadius: "999px",
                textTransform: "none",
                paddingLeft: 0.8,
            }}
            variant="contained"
        >
            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `20px solid #03A400`,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    width: 0,
                    height: 0,
                    left: 18,
                    top: -10,
                    zIndex: -10,
                }}
            />
            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `10px solid black`,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    opacity: 0.5,
                    width: 0,
                    height: 0,
                    left: 9,
                    top: -5,
                    zIndex: -5,
                }}
            />
            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `20px solid #03A400`,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    width: 0,
                    height: 0,
                    left: 3,
                    top: -10,
                    zIndex: -10,
                }}
            />
            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `10px solid black`,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    opacity: 0.5,
                    width: 0,
                    height: 0,
                    left: 24,
                    top: -5,
                    zIndex: -5,
                }}
            />
            <Typography
                variant="caption"
                sx={{ fontSize: "15px", letterSpacing: -3, paddingRight: 1 }}
            >
                ・ω・
            </Typography>
            {buttonName}
            <CircularProgress
                value={60}
                thickness={15}
                variant="determinate"
                size={14}
                sx={{
                    position: "absolute",
                    right: -17,
                    top: 0,
                    rotate: "200deg",
                    zIndex: -10,
                    borderRadius: "999px",
                }}
            />
            <CircularProgress
                value={60}
                thickness={10}
                variant="determinate"
                size={20}
                sx={{
                    position: "absolute",
                    right: -15,
                    rotate: "20deg",
                    zIndex: -10,
                }}
            />
        </Button>
    );
};

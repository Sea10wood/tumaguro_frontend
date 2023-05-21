import {
    Box,
    Button,
    ButtonProps,
    CircularProgress,
    Typography,
} from "@mui/material";

export const CustomButton = (
    props: {
        buttonName: string;
        primaryColor: string;
        secondaryColor: string;
    } & ButtonProps
) => {
    return (
        <Box component="div" position="relative" padding={1}>
            <Button
                sx={{
                    position: "relative",
                    borderRadius: "999px",
                    textTransform: "none",
                    paddingLeft: 0.8,
                    zIndex: 100,
                    backgroundColor: props.primaryColor,
                    ":hover": {
                        backgroundColor: props.primaryColor,
                    },
                }}
                {...props}
                variant="contained"
            >
                <Box
                    position="absolute"
                    component="div"
                    sx={{
                        backgroundColor: props.secondaryColor,
                        width: "5px",
                        height: "15px",
                        left: 40,
                        top: 0,
                        borderEndEndRadius: "100px",
                        borderEndStartRadius: "100px",
                        zIndex: -10,
                    }}
                />
                <Box
                    position="absolute"
                    component="div"
                    sx={{
                        backgroundColor: props.secondaryColor,
                        width: "5px",
                        height: "15px",
                        left: 50,
                        top: 0,
                        borderEndEndRadius: "100px",
                        borderEndStartRadius: "100px",
                        zIndex: -10,
                    }}
                />
                <Box
                    position="absolute"
                    component="div"
                    sx={{
                        backgroundColor: props.secondaryColor,
                        width: "5px",
                        height: "15px",
                        left: 60,
                        top: 0,
                        borderEndEndRadius: "100px",
                        borderEndStartRadius: "100px",
                        zIndex: -10,
                    }}
                />
                <Box
                    position="absolute"
                    component="div"
                    sx={{
                        backgroundColor: props.secondaryColor,
                        width: "5px",
                        height: "15px",
                        left: 70,
                        top: 0,
                        borderEndEndRadius: "100px",
                        borderEndStartRadius: "100px",
                        zIndex: -10,
                    }}
                />
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: "15px",
                        letterSpacing: -3,
                        paddingRight: 1,
                        zIndex: 120,
                    }}
                >
                    ・ω・
                </Typography>
                {props.buttonName}
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
                        zIndex: 95,
                        borderRadius: "999px",
                        color: props.primaryColor,
                        ":hover": {
                            color: props.primaryColor,
                        },
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
                        zIndex: 95,
                        color: props.primaryColor,
                        ":hover": {
                            color: props.primaryColor,
                        },
                    }}
                />
            </Button>

            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `20px solid ${props.primaryColor}`,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    width: 0,
                    height: 0,
                    left: 24,
                    top: 0,
                    zIndex: 90,
                }}
            />
            <Box
                position="absolute"
                component="div"
                sx={{
                    borderBottom: `20px solid ${props.primaryColor}`,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    width: 0,
                    height: 0,
                    left: 10,
                    top: 0,
                    zIndex: 90,
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
                    left: 30,
                    top: 3,
                    zIndex: 90,
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
                    left: 16,
                    top: 3,
                    zIndex: 90,
                }}
            />
        </Box>
    );
};

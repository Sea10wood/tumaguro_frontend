import { Typography } from "@mui/material";
function formatDate(datetimeString: string) {
    var datetime = new Date(datetimeString);

    var year = datetime.getFullYear();
    var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
    var day = ("0" + datetime.getDate()).slice(-2);
    var hours = ("0" + datetime.getHours()).slice(-2);
    var minutes = ("0" + datetime.getMinutes()).slice(-2);
    var seconds = ("0" + datetime.getSeconds()).slice(-2);

    return (
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
}
export const CustomDate = ({ dateString }: { dateString: string }) => {
    const date = formatDate(dateString);
    return (
        <Typography variant="caption" sx={{ placeSelf: "center" }}>
            {date}
        </Typography>
    );
};

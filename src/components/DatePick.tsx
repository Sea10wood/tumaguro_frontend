// import { DatePicker, LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import { Box, TextField } from "@mui/material";
// import { useState } from "react";

import { DatePicker } from "@mui/lab";
import { useState } from "react";
import { CalendarContainer } from "react-datepicker";
// // extend(duration);

// // const today = dayjs();

// // const formatday = today.format("YYYY年MM月DD日 HH:mm:ss");
// // console.log(formatday);

// // const addday = today.add(dayjs.duration({ years: 1, months: 2 }));
// // console.log(addday);

// // const addmonth = today.add(1, "M");
// // console.log(addmonth);

// // const getmonth = today.get("month");
// // console.log(getmonth);

// export function DatePick() {
//     const [value, setValue] = useState<Date | null>(null);

//     // const handleChange = (newValue: Date | null) => {
//     //     setValue(newValue);
//     // };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <Box sx={{ m: 2, width: "25ch" }}>
//                 <DatePicker
//                     label="DatePicker"
//                     value={value}
//                     // onChange={handleChange}
//                     inputFormat="yyyy/MM/dd"
//                     mask="____/__/__"
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//             </Box>
//         </LocalizationProvider>
//     );
// }

const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = () => {
        return (
            <div
                style={{
                    padding: "16px",
                    background: "#216ba5",
                    color: "#fff",
                }}
            >
                <CalendarContainer>
                    <div style={{ background: "#f0f0f0" }}>
                        What is your favorite day?
                    </div>
                    <div style={{ position: "relative" }}>{}</div>
                </CalendarContainer>
            </div>
        );
    };
    return (
        <>
            <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarContainer={MyContainer}
            />
            hoge
        </>
    );
};
export default DatePick;

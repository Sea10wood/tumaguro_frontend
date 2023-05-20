import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
        <DatePicker
            placeholderText="yyyy/MM/dd HH:mm"
            dateFormat="yyyy/MM/dd HH:mm"
            locale="ja"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date!)}
            showTimeSelect
            className="date-picker"
            timeIntervals={30}
        />
    );
};
export default DatePick;

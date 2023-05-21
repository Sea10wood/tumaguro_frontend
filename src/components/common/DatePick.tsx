import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({
    setDate,
    selectedDate,
}: {
    setDate: Dispatch<SetStateAction<Date | null>>;
    selectedDate: Date | null;
}) => {
    return (
        <DatePicker
            placeholderText="yyyy/MM/dd HH:mm"
            dateFormat="yyyy/MM/dd HH:mm"
            selected={selectedDate}
            onChange={(date) => setDate(date)}
            showTimeSelect
            className="date-picker"
            timeIntervals={30}
        />
    );
};
export default DatePick;

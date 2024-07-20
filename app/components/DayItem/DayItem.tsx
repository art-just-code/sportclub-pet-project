import Styles from "./DayItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { selectDate } from "@/lib/features/selectDate/selectDate";
import { checkIsToday } from "@/app/utils/helpers/date";

interface DayItemParams {
    date: Date;
    monthIndex: number;
    selectedMonthIndex: number;
    dayNumber: number;
    locale: string;
}

export const DayItem: React.FC<DayItemParams> = ({ date, monthIndex, selectedMonthIndex, dayNumber, locale }) => {
    const dispatch = useDispatch<AppDispatch>();

    const isToday = checkIsToday(date);
    const isAdditionalDay = monthIndex !== selectedMonthIndex;
    //console.log(`render ${dayNumber}`);
    return (
        <div
            onClick={() => {
                dispatch(selectDate(date.toLocaleDateString(locale)));
            }}
            className={`${Styles["calendar__day"]}
            ${isToday ? Styles["calendar__today__item"] : ""} 
            ${isAdditionalDay ? Styles["calendar__additional__day"] : ""}`}
        >
            {dayNumber}
        </div>
    );
};

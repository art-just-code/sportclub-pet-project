import Styles from "./DayItem.module.css";
import { checkIsToday } from "@/app/utils/helpers/date";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { selectDate } from "@/lib/features/selectDate/selectDate";
import { changePopupIsOpen } from "@/lib/features/showPopup/showPopup";

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
    //console.log(date.toLocaleDateString(locale));
    return (
        <div
            onClick={() => {
                dispatch(selectDate(date.toLocaleDateString(locale)));
                dispatch(changePopupIsOpen(true));
            }}
            className={`${Styles["calendar__day"]}
            ${isToday ? Styles["calendar__today__item"] : ""} 
            ${isAdditionalDay ? Styles["calendar__additional__day"] : ""}`}
        >
            {dayNumber}
        </div>
    );
};

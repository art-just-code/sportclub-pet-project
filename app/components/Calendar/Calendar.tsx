"use client";
import Styles from "./Calendar.module.css";

import { useCalendar } from "@/app/utils/hooks/useCalendar";
import { checkDateIsEqual, checkIsToday } from "@/app/utils/helpers/date";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { select } from "@/lib/features/selectDate/selectDate";

interface CalendarParams {
    locale?: string;
    currentDate?: Date;
    currentMonth: number;
    firstWeekDay?: number;
    openPopup: () => void;
}

export const Calendar: React.FC<CalendarParams> = ({
    locale = "default",
    firstWeekDay = 2,
    currentDate,
    currentMonth,
    openPopup,
}) => {
    const { state } = useCalendar({ firstWeekDay, locale, currentDate, currentMonth }); // functions - лишнее?

    const storeDate = useSelector((state: RootState) => state.selectDate);
    const dispatch = useDispatch<AppDispatch>();

    console.log(`render Calendar ${currentMonth}`);

    return (
        <div className={Styles["calendar"]}>
            <div className={Styles["calendar__header"]}>
                <h3>
                    {state.monthesNames[state.selectedMonth.monthIndex].month} {state.currentYear}
                </h3>
            </div>
            <div className={Styles["calendar__body"]}>
                <div className={Styles["calendar__week__names"]}>
                    {state.weekDaysNames.map((weekDaysNames) => (
                        <div key={weekDaysNames.dayShort}>{weekDaysNames.dayShort}</div>
                    ))}
                </div>
                <div className={Styles["calendar__days"]}>
                    {state.calendarDays.map((day) => {
                        const isToday = checkIsToday(day.date);
                        const isSelectedDay = checkDateIsEqual(day.date, new Date(storeDate.date)); // отрисовывая календарь, проверяет, выбрана ли конкретная дата
                        const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;
                        return (
                            <div
                                key={`${day.dayNumber} - ${day.monthIndex}`}
                                onClick={() => {
                                    dispatch(select(day.date.toDateString()));
                                    openPopup();
                                }}
                                className={`${Styles["calendar__day"]}
                                        ${isToday ? Styles["calendar__today__item"] : ""} 
                                        ${isSelectedDay ? Styles["calendar__selected__item"] : ""}
                                        ${isAdditionalDay ? Styles["calendar__additional__day"] : ""}`}
                            >
                                {day.dayNumber}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

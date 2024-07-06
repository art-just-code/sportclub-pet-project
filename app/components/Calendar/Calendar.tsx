"use client";
import { useCalendar } from "@/app/utils/hooks/useCalendar";
import Styles from "./Calendar.module.css";
import { checkDateIsEqual, checkIsToday } from "@/app/utils/helpers/date";

interface CalendarParams {
    locale?: string;
    currentDate: Date;
    currentMonth: number;
    selectDate: (date: Date) => void; // описание функции, которая будет принимать date и возвращать что-то
    firstWeekDay?: number;
}

export const Calendar: React.FC<CalendarParams> = ({
    locale = "default",
    firstWeekDay = 2,
    selectDate,
    currentDate,
    currentMonth,
}) => {
    const { state, functions } = useCalendar({ firstWeekDay, locale, currentDate, currentMonth });

    //console.log("state.calendarDays", state.calendarDays);

    return (
        <div className={Styles["calendar"]}>
            <div className={Styles["calendar__header"]}>
                <h3>
                    {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
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
                        const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date);
                        const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;
                        return (
                            <div
                                key={`${day.dayNumber} - ${day.monthIndex}`}
                                onClick={() => {
                                    functions.setSelectedDate(day);
                                    selectDate(day.date); // надо подумать, как сделать так, чтобы выбрать можно было только один день
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

"use client";
import Styles from "./Calendar.module.css";

import { useCalendar } from "@/app/utils/hooks/useCalendar";
import { DayItem } from "../DayItem/DayItem";

interface CalendarParams {
    locale?: string;
    currentMonth: number;
    firstWeekDay?: number;
}

export const Calendar: React.FC<CalendarParams> = ({ locale = "default", firstWeekDay = 2, currentMonth }) => {
    const { state } = useCalendar({ firstWeekDay, locale, currentMonth });

    //console.log(`data`, data);

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
                        return (
                            <DayItem
                                key={`${day.dayNumber} - ${day.monthIndex}`}
                                date={day.date}
                                monthIndex={day.monthIndex}
                                selectedMonthIndex={currentMonth}
                                dayNumber={day.dayNumber}
                                locale={locale}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

"use client";
import Styles from "./Calendar.module.css";

import { useCalendar } from "@/app/utils/hooks/useCalendar";
import { Preloader } from "../Preloader/Preloader";
import { DayItem } from "../DayItem/DayItem";
import { useGetDataByMonth } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

interface CalendarParams {
    locale?: string;
    firstWeekDay?: number;
    currentMonth: number;
    monthName: string;
}

type RentData = {
    date?: string;
    current?: number;
    month?: any; // позже убрать
    user?: any; // позже убрать
};

export const Calendar: React.FC<CalendarParams> = ({
    locale = "default",
    firstWeekDay = 2,
    currentMonth,
    monthName,
}) => {
    const { state } = useCalendar({ firstWeekDay, locale, currentMonth }); // хук создания календаря
    const data: Array<RentData> = useGetDataByMonth(endpoints.dates, monthName); // получение данных для конкретного месяца, добавить мемоизацию?
    console.log(data);
    //if (data.length > 0) const rentData: Array<RentData> = data.map((obj) => {date = obj.date, current = obj.current});

    return (
        <div className={Styles["calendar"]}>
            <div className={Styles["calendar__header"]}>
                <h3>
                    {state.monthesNames[state.selectedMonth.monthIndex].month} {state.currentYear}
                </h3>
            </div>
            <div className={Styles["calendar__body"]}>
                {data ? (
                    <>
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
                                        rentData={2}
                                    />
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
};

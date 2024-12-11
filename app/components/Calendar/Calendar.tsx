"use client";
import Styles from "./Calendar.module.css";

import { useCalendar } from "@/app/utils/hooks/useCalendar";
import { Preloader } from "../Preloader/Preloader";
import { DayItem } from "../DayItem/DayItem";
import { useGetDataByMonth } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

interface CalendarParams {
    locale?: string;
    currentMonth: number;
    firstWeekDay?: number;
}

export const Calendar: React.FC<CalendarParams> = ({ locale = "default", firstWeekDay = 2, currentMonth }) => {
    const { state } = useCalendar({ firstWeekDay, locale, currentMonth });
    const julyData = useGetDataByMonth(endpoints.dates, "july");
    const augustData = useGetDataByMonth(endpoints.dates, "august");

    return (
        <div className={Styles["calendar"]}>
            <div className={Styles["calendar__header"]}>
                <h3>
                    {state.monthesNames[state.selectedMonth.monthIndex].month} {state.currentYear}
                </h3>
            </div>
            <div className={Styles["calendar__body"]}>
                {julyData ? (
                    <>
                        <div className={Styles["calendar__week__names"]}>
                            {state.weekDaysNames.map((weekDaysNames) => (
                                <div key={weekDaysNames.dayShort}>{weekDaysNames.dayShort}</div>
                            ))}
                        </div>
                        <div className={Styles["calendar__days"]}>
                            {state.calendarDays.map((day) => {
                                /* const isRental = data[day.dateString] доработать проверку */
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
                    </>
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
};

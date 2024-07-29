import { useMemo } from "react";
import { createDate, createMonth, getMonthNumberOfDays, getMonthesNames, getWeekDaysNames } from "../helpers/date";

interface UseCalendarParams {
    locale?: string;
    firstWeekDay: number;
    currentMonth: number;
}

export const useCalendar = ({ firstWeekDay = 2, locale = "default", currentMonth }: UseCalendarParams) => {
    const date = new Date();
    const selectedDate = createDate({ date });
    const selectedMonth = createMonth({ date: new Date(selectedDate.year, currentMonth), locale });
    const currentYear = date.getFullYear();

    const monthesNames = useMemo(() => getMonthesNames(locale), []); // используем дальше useMemo, чтобы эти сущности не рендерились каждый раз
    const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), []);

    const days = useMemo(() => selectedMonth.createMonthDays(), []); // в массив зависимостей передаются значения также как в useEffect - при изменении их эначений будет происходить перерендер

    // механизм расчета того, сколько дней необходимо отрисовывать с прошлого и следующего месяцев
    const calendarDays = useMemo(() => {
        //получаем - сколько в данном месяце дней
        const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, currentYear);
        // получаем количество дней в предыдущем месяце
        const prevMonthDays = createMonth({
            date: new Date(currentYear, selectedMonth.monthIndex - 1),
            locale,
        }).createMonthDays();
        // получаем количество дней в следующем месяце
        const nextMonthDays = createMonth({
            date: new Date(currentYear, selectedMonth.monthIndex + 1),
            locale,
        }).createMonthDays();

        const firstDay = days[0];
        const lastDay = days[monthNumberOfDays - 1];

        const shiftIndex = firstWeekDay - 1; // из-за смещения 0 дня с воскресенья на понедельник, тут мы возвращаем как было, учитываем это смещение

        const numberOfPrevDays =
            firstDay.dayNumberInWeek - 1 - shiftIndex < 0
                ? 7 - (firstWeekDay - firstDay.dayNumberInWeek)
                : firstDay.dayNumberInWeek - 1 - shiftIndex;

        const numberOfNextDays =
            7 - lastDay.dayNumberInWeek + shiftIndex > 6
                ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
                : 7 - lastDay.dayNumberInWeek + shiftIndex;

        const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays; // получаем сколько вообще нужо отрисовать дней

        const result = [];
        // добавляем дни предыдущего месяца
        for (let i = 0; i < numberOfPrevDays; i++) {
            const inverted = numberOfPrevDays - i;
            result[i] = prevMonthDays[prevMonthDays.length - inverted];
        }
        // добавляем дни текущего месяца
        for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i++) {
            result[i] = days[i - numberOfPrevDays];
        }
        // добавляем дни следующего месяца
        for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i++) {
            result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
        }

        return result;
    }, [selectedMonth.year, selectedMonth.monthIndex]);

    return {
        state: {
            calendarDays,
            weekDaysNames,
            monthesNames,
            selectedDate,
            selectedMonth,
            currentYear,
        },
    };
};

import { useMemo } from "react";
import { createDate, createMonth, getMonthNumberOfDays, getMonthesNames, getWeekDaysNames } from "../helpers/date";

interface RentData {
    date: string;
    count: string;
    month?: any; // позже убрать
    user?: any; // позже убрать
}

interface UseCalendarParams {
    locale?: string;
    firstWeekDay: number;
    currentMonth: number;
    monthRentData: Array<RentData>;
}

export const useCalendar = ({
    firstWeekDay = 2,
    locale = "default",
    currentMonth,
    monthRentData,
}: UseCalendarParams) => {
    // блок работы с данными аренды с сервера
    //console.log(monthRentData); // [{date: '07.06.2024', count: '1'},{date: '14.06.2024', count: '2'}]

    const date = new Date();
    const selectedDate = createDate({ date });
    const selectedMonth = createMonth({ date: new Date(selectedDate.year, currentMonth), locale });
    const currentYear = date.getFullYear();
    const monthesNames = useMemo(() => getMonthesNames(locale), []); // используем дальше useMemo, чтобы эти сущности не рендерились каждый раз
    const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), []);

    const days = useMemo(() => selectedMonth.createMonthDays(), []); // в массив зависимостей передаются значения также как в useEffect - при изменении их значений будет происходить перерендер
    console.log(selectedMonth);
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

        const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays; // получаем сколько вообще нужно отрисовать дней

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

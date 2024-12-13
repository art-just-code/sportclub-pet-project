"use client";

import Styles from "./page.module.css";
import { Calendar } from "./components/Calendar/Calendar";

type Month = {
    name: string;
    num: number;
};

export default function Home() {
    /* здесь должно быть получение данных конфигураций и функция, не прошел ли месяц*/
    const activeMonthes: Array<Month> = [
        {
            name: "may",
            num: 4,
        },
        {
            name: "june",
            num: 5,
        },
        {
            name: "july",
            num: 6,
        },
        {
            name: "august",
            num: 7,
        },
        {
            name: "september",
            num: 8,
        },
    ];
    console.log(new Date().getMonth()); // отсчет месяцев начинается с 0 - январь, сделать проверку на исключение месяцев, которые прошли
    return (
        <main
            className={Styles["main"]}
            id="schedule"
        >
            {activeMonthes.map((obj) => {
                return (
                    <Calendar
                        currentMonth={obj.num}
                        key={obj.num}
                        monthName={obj.name}
                    />
                );
            })}
        </main>
    );
}

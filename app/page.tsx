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
    ];
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

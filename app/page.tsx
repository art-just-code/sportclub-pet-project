"use client";

import Styles from "./page.module.css";
import { Calendar } from "./components/Calendar/Calendar";
import { useGetData } from "@/app/api/api-hooks";
import { endpoints } from "@/app/api/config";

type Month = {
    name: string;
    num: number;
};

type RentData = {
    date: string;
    count: string;
    month?: any; // позже убрать
    user?: any; // позже убрать
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

    const data: Array<RentData> = useGetData(endpoints.dates);

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
                        // monthName={obj.name}
                        monthData={data.filter((rent) => obj.name === rent.month.name)}
                    />
                );
            })}
        </main>
    );
}

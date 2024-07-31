"use client";

import Styles from "./page.module.css";
import { Calendar } from "./components/Calendar/Calendar";

export default function Home() {
    /* здесь должно быть получение данных конфигураций и функция, не прошел ли месяц*/

    return (
        <main
            className={Styles["main"]}
            id="schedule"
        >
            <Calendar currentMonth={7} />
            <Calendar currentMonth={8} />
        </main>
    );
}

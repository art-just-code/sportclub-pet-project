"use client";

import Styles from "./page.module.css";
import { Calendar } from "./components/Calendar/Calendar";
import { useGetData } from "./api/api-hooks";
import { endpoints } from "./api/config";

export default function Home() {
    const data = useGetData(endpoints.dates);
    console.log(data);

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

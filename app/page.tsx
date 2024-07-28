"use client";

import Styles from "./page.module.css";
import { Calendar } from "./components/Calendar/Calendar";

export default function Home() {
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

"use client";

import Styles from "./page.module.css";

import { Calendar } from "./components/Calendar/Calendar";

export default function Home() {
    return (
        <main className={Styles["main"]}>
            <h3 id="schedule">График аренды</h3>
            <Calendar currentMonth={5} />
            <Calendar currentMonth={6} />
            <Calendar currentMonth={7} />
        </main>
    );
}

// попробовать решить проблему перерисовки календарей с помощью метода map() и передачи ключа

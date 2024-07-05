"use client";

import Styles from "./page.module.css";

import { Calendar } from "./components/Calendar/Calendar";
import { useState } from "react";

export default function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <main className={Styles["main"]}>
            <h3 id="schedule">График аренды</h3>
            <Calendar
                selectDate={setSelectedDate}
                selectedDate={selectedDate}
            />
            <Calendar
                selectDate={setSelectedDate}
                selectedDate={selectedDate}
            />
            <Calendar
                selectDate={setSelectedDate}
                selectedDate={selectedDate}
            />
        </main>
    );
}

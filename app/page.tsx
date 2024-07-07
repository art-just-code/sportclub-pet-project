"use client";

import Styles from "./page.module.css";

import { Calendar } from "./components/Calendar/Calendar";
import { useState } from "react";
import StoreProvider from "@/app/StoreProvider";

export default function Home() {
    const [currentDate, setSelectedDate] = useState(new Date());
    const currentMonth = currentDate.getMonth();

    //console.log(new Date(currentYear, 5, 1));

    return (
        <main className={Styles["main"]}>
            <h3 id="schedule">График аренды</h3>
            <StoreProvider>
                <Calendar
                    selectDate={setSelectedDate}
                    currentDate={currentDate}
                    currentMonth={currentMonth === 5 ? currentMonth : 5}
                />
                <Calendar
                    selectDate={setSelectedDate}
                    currentDate={currentDate}
                    currentMonth={currentMonth === 6 ? currentMonth : 6}
                />
                <Calendar
                    selectDate={setSelectedDate}
                    currentDate={currentDate}
                    currentMonth={currentMonth === 7 ? currentMonth : 7}
                />
            </StoreProvider>
        </main>
    );
}

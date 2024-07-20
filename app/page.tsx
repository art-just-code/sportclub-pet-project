"use client";

import Styles from "./page.module.css";
import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { Overlay } from "./components/Overlay/Overlay";
import { Popup } from "./components/Popup/Popup";
import { RentForm } from "./components/RentForm/RentForm";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Home() {
    const [popupIsOpened, setPopupIsOpened] = useState(false);
    const { storeDate } = useSelector((state: RootState) => state.selectDate);
    const openPopup = () => setPopupIsOpened(true);
    const closePopup = () => setPopupIsOpened(false);
    return (
        <main className={Styles["main"]}>
            <h3 id="schedule">Выберите дату {storeDate}</h3>
            <Calendar currentMonth={6} />
            <Calendar currentMonth={7} />
            <Calendar currentMonth={8} />
            <Overlay
                isOpened={popupIsOpened}
                close={closePopup}
            />
            <Popup
                isOpened={popupIsOpened}
                close={closePopup}
            >
                <RentForm />
            </Popup>
        </main>
    );
}

// попробовать решить проблему перерисовки календарей с помощью метода map() и передачи ключа

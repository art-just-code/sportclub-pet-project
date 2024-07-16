"use client";

import Styles from "./page.module.css";
import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { Overlay } from "./components/Overlay/Overlay";
import { Popup } from "./components/Popup/Popup";
import { RentForm } from "./components/RentForm/RentForm";

export default function Home() {
    const [popupIsOpened, setPopupIsOpened] = useState(false);

    const openPopup = () => setPopupIsOpened(true);
    const closePopup = () => setPopupIsOpened(false);
    return (
        <main className={Styles["main"]}>
            <h3 id="schedule">График аренды</h3>
            <Calendar
                currentMonth={6}
                openPopup={openPopup}
            />
            <Calendar
                currentMonth={7}
                openPopup={openPopup}
            />
            <Calendar
                currentMonth={8}
                openPopup={openPopup}
            />
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

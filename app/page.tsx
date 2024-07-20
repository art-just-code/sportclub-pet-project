"use client";

import Styles from "./page.module.css";
import { useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { Overlay } from "./components/Overlay/Overlay";
import { Popup } from "./components/Popup/Popup";
import { RentForm } from "./components/RentForm/RentForm";

export default function Home() {
    const [popupIsOpened, setPopupIsOpened] = useState(false);

    // const openPopup = () => setPopupIsOpened(true); вынести в redux
    const closePopup = () => setPopupIsOpened(false);
    return (
        <main
            className={Styles["main"]}
            id="schedule"
        >
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

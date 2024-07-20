"use client";
import Styles from "./RentForm.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const RentForm: React.FC = () => {
    const { storeDate } = useSelector((state: RootState) => state.selectDate);
    const [rentData, setRentData] = useState({ phone: "", count: "" });
    const [message, setMessage] = useState({ status: null, text: null });

    const handleInput = () => {};
    const handleSubmit = async () => {};

    const freeCount = 9; // статика, позже возьмем остаток из бд

    return (
        <form
            onSubmit={handleSubmit}
            className={Styles["form"]}
        >
            <h2 className={Styles["form__title"]}>Окно аренды на {storeDate}</h2>
            <div className={Styles["form__fields"]}>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Ваш номер телефона</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="phone"
                        type="tel"
                        placeholder="+79*********"
                    />
                </label>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Сколько вам нужно комплектов?</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        type="number"
                        name="count"
                        placeholder={`Осталось ${freeCount} штук`}
                        min={1}
                        max={freeCount}
                    />
                </label>
            </div>
            {message.status && <p className={Styles["form__message"]}>{message.text}</p>}
            <div className={Styles["form__actions"]}>
                <button
                    className={Styles["form__reset"]}
                    type="reset"
                >
                    Очистить
                </button>
                <button
                    className={Styles["form__submit"]}
                    type="submit"
                >
                    Перейти к предоплате
                </button>
            </div>
        </form>
    );
};

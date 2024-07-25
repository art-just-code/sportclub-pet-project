"use client";
import Styles from "./RentForm.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { isFormDataValid } from "@/app/utils/helpers/validation/isFormDataValid";

export const RentForm: React.FC = () => {
    const { storeDate } = useSelector((state: RootState) => state.selectDate);
    const [rentData, setRentData] = useState({ phone: "", count: "" });
    const [errors, setErrors] = useState({ phone: "", count: "" });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRentData({ ...rentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(isFormDataValid(rentData));
        console.log(rentData);
    };

    const freeCount = 7; // статика, позже возьмем остаток из бд

    return (
        <form
            onSubmit={handleSubmit}
            className={Styles["form"]}
            autoComplete="off"
        >
            <h2 className={Styles["form__title"]}>Окно аренды на {storeDate}</h2>
            <div className={Styles["form__fields"]}>
                <label className={Styles["form__field-title"]}>Ваш номер телефона</label>
                <input
                    onChange={(e) => handleInput(e)}
                    value={rentData.phone}
                    className={Styles["form__field-input"]}
                    name="phone"
                    type="tel"
                    placeholder="+79*********"
                />
                {errors.phone && <p className={Styles["form__message"]}>{errors.phone}</p>}
                <label className={Styles["form__field-title"]}>Сколько вам нужно комплектов?</label>
                <input
                    onChange={(e) => handleInput(e)}
                    value={rentData.count}
                    className={Styles["form__field-input"]}
                    type="number"
                    name="count"
                    placeholder={`Осталось ${freeCount} штук`}
                    min={1}
                    max={freeCount}
                />
                {errors.count && <p className={Styles["form__message"]}>{errors.count}</p>}
            </div>
            <div className={Styles["form__actions"]}>
                <button
                    className={Styles["form__reset"]}
                    type="reset"
                    onClick={() => setRentData({ phone: "", count: "" })}
                >
                    Очистить
                </button>
                <button
                    className={Styles["form__submit"]}
                    type="submit"
                >
                    <p>Сделать заказ</p>
                    <p>(мы напишем вам)</p>
                </button>
            </div>
        </form>
    );
};

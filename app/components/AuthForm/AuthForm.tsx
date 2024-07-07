"use client";
import Styles from "./AuthForm.module.css";
import { useState } from "react";

export const AuthForm: React.FC = () => {
    const [authData, setAuthData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState({ status: null, text: null });
    const handleInput = () => {};
    const handleSubmit = async () => {};

    return (
        <form
            onSubmit={handleSubmit}
            className={Styles["form"]}
        >
            <h2 className={Styles["form__title"]}>Авторизация</h2>
            <div className={Styles["form__fields"]}>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Email</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        name="email"
                        type="email"
                        placeholder="hello@world.com"
                    />
                </label>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Пароль</span>
                    <input
                        onInput={handleInput}
                        className={Styles["form__field-input"]}
                        type="password"
                        name="password"
                        placeholder="***********"
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
                    Войти
                </button>
            </div>
        </form>
    );
};

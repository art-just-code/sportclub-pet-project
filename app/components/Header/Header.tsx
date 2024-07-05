"use client";

import Styles from "./Header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa";

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className={Styles["header"]}>
            <div className={Styles["header__inner"]}>
                <nav className={Styles["header__nav"]}>
                    <ul className={Styles["list"]}>
                        <li className={Styles["nav__list__item"]}>
                            <Link href="/terms">Условия</Link>
                        </li>
                        <li className={Styles["nav__list__item"]}>
                            <Link href="/#schedule">Расписание</Link> {/* позже сделать тут якорь на расписание */}
                        </li>
                        <li className={Styles["nav__list__item"]}>
                            <Link href="/about">О нас</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={Styles["header__wallpaper"]}>
                <div className={Styles["container"]}>
                    <h1 className={Styles["title"]}>Аренда SUP в Рязани</h1>
                    <ul className={`${Styles["list"]} ${Styles["link__list"]}`}>
                        <li className={Styles["link__list__item"]}>
                            <a href="whatsapp://send?phone=79209716159">
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li className={Styles["link__list__item"]}>
                            <a href="https://telegram.me/grebnik89">
                                <FaTelegramPlane />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={Styles["container"]}>
                    <Link href="#schedule">Выбрать дату</Link>
                    <Link href="#schedule">
                        <FaChevronDown className={Styles["header__arrow"]} />
                    </Link>
                </div>
            </div>
        </header>
    );
};

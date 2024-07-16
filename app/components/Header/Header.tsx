"use client";

import Styles from "./Header.module.css";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaWhatsapp, FaTelegramPlane, FaBars, FaPhone, FaRegUser } from "react-icons/fa";
import { NavBar } from "../NavBar/NavBar";

export const Header: React.FC = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const pathname = usePathname();

    return (
        <header className={Styles["header"]}>
            <div className={Styles["header__inner"]}>
                <FaBars
                    className={Styles["header__bars"]}
                    onClick={() => setIsNavVisible(!isNavVisible)}
                />
                {isNavVisible && <NavBar />}
                <a href="tel:+79209509943">
                    <FaPhone />
                </a>
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
                <Link
                    className={Styles["header__toschedule__btn"]}
                    href="/#schedule"
                >
                    Выбрать дату
                </Link>
                {pathname === "/" && (
                    <div className={Styles["container"]}>
                        <Link href="/#schedule">
                            <FaChevronDown className={Styles["header__arrow"]} />
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

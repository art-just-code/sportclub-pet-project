"use client";

import Styles from "./Header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className={Styles["header"]}>
            <div className={Styles["header__inner"]}>
                <nav className={Styles["header__nav"]}>
                    <ul className={Styles["header__nav__list"]}>
                        <li>
                            <Link href="/about">О нас</Link>
                        </li>
                        <li>
                            <Link href="#schedule">Расписание</Link> {/* позже сделать тут якорь на расписание */}
                        </li>
                        <li>
                            <Link href="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={Styles["header__wallpaper"]}>
                <h1 className={Styles["title"]}>Аренда SUP в Рязани</h1>
                <Link href="#schedule">
                    <FaChevronDown className={Styles["header__arrow"]} />
                </Link>
            </div>
        </header>
    );
};

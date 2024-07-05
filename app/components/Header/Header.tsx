"use client";

import Styles from "./Header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
                            <Link href="/">Расписание</Link> {/* позже сделать тут якорь на расписание */}
                        </li>
                        <li>
                            <Link href="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={Styles["header__wallpaper"]}></div>
        </header>
    );
};

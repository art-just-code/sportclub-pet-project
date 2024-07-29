import Link from "next/link";
import Styles from "./NavBar.module.css";

export const NavBar: React.FC = () => {
    return (
        <nav className={Styles["nav"]}>
            <ul className={Styles["nav__list"]}>
                <li className={Styles["nav__list__item"]}>
                    <Link href="/terms">Условия</Link>
                </li>
                <li className={Styles["nav__list__item"]}>
                    <Link href="/#schedule">Расписание</Link>
                </li>
                <li className={Styles["nav__list__item"]}>
                    <Link href="/contacts">Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};

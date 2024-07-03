import Image from "next/image";
import Styles from "./page.module.css";

export default function Home() {
    return (
        <main className={Styles.main}>
            <h1>Hello from main page</h1>
        </main>
    );
}

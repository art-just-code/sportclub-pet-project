import Styles from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div className={Styles["spinner"]}>
            <div className={Styles["bar1"]}></div>
            <div className={Styles["bar2"]}></div>
            <div className={Styles["bar3"]}></div>
            <div className={Styles["bar4"]}></div>
            <div className={Styles["bar5"]}></div>
            <div className={Styles["bar6"]}></div>
            <div className={Styles["bar7"]}></div>
            <div className={Styles["bar8"]}></div>
            <div className={Styles["bar9"]}></div>
            <div className={Styles["bar10"]}></div>
            <div className={Styles["bar11"]}></div>
            <div className={Styles["bar12"]}></div>
        </div>
    );
};

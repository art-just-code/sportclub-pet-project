"use client";
import Styles from "./Overlay.module.css";

interface OverlayParams {
    isOpened: Boolean;
    close: () => void;
}

export const Overlay: React.FC<OverlayParams> = ({ isOpened, close }) => {
    return (
        <div
            className={`${Styles["overlay"]} ${isOpened && Styles["overlay_is-opened"]}`}
            onClick={() => close()}
        ></div>
    );
};

"use client";
import Styles from "./Overlay.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { changePopupIsOpen } from "@/lib/features/showPopup/showPopup";

export const Overlay: React.FC = () => {
    const { popupIsOpened } = useSelector((state: RootState) => state.popupIsOpened);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div
            className={`${Styles["overlay"]} ${popupIsOpened && Styles["overlay_is-opened"]}`}
            onClick={() => dispatch(changePopupIsOpen(false))}
        ></div>
    );
};

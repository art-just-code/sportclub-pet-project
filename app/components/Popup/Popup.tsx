"use client";
import Styles from "./Popup.module.css";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { changePopupIsOpen } from "@/lib/features/showPopup/showPopup";

interface PopupParams {
    children: React.ReactNode; // позже понять, какой тип правильно указывать для children
}

export const Popup: React.FC<PopupParams> = ({ children }) => {
    const { popupIsOpened } = useSelector((state: RootState) => state.popupIsOpened);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={`${Styles["popup"]} ${popupIsOpened && Styles["popup_is-opened"]}`}>
            <button
                className={Styles["close"]}
                onClick={() => dispatch(changePopupIsOpen(false))}
            >
                <FaTimes className={Styles["close-icon"]} />
            </button>
            <div className={Styles.content}>{children}</div>
        </div>
    );
};

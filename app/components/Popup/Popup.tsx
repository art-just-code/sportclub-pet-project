import Styles from "./Popup.module.css";
import { FaTimes } from "react-icons/fa";

interface PopupParams {
    isOpened: Boolean;
    close: () => void;
    children: any;
}

export const Popup: React.FC<PopupParams> = ({ isOpened, close, children }) => {
    return (
        <div className={`${Styles["popup"]} ${isOpened && Styles["popup_is-opened"]}`}>
            <button
                className={Styles["close"]}
                onClick={() => close()}
            >
                <FaTimes className={Styles["close-icon"]} />
            </button>
            <div className={Styles.content}>{children}</div>
        </div>
    );
};

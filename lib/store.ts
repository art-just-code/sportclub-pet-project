import { configureStore } from "@reduxjs/toolkit";
import selectDateSlice from "./features/selectDate/selectDate";
import changePopupIsOpenSlice from "./features/showPopup/showPopup";

export const makeStore = () => {
    return configureStore({
        reducer: {
            selectDate: selectDateSlice,
            popupIsOpened: changePopupIsOpenSlice,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

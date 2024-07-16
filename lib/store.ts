import { configureStore } from "@reduxjs/toolkit";
import selectDateSlice from "./features/selectDate/selectDate";
import isAuthSlice from "./features/isAuth/isAuth";

export const makeStore = () => {
    return configureStore({
        reducer: {
            selectDate: selectDateSlice,
            isAuth: isAuthSlice,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

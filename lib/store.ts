import { configureStore } from "@reduxjs/toolkit";
import selectDateSlice from "./features/selectDate/selectDate";

export const makeStore = () => {
    return configureStore({
        reducer: {
            selectDate: selectDateSlice,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

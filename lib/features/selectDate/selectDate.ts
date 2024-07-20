import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface selectDateState {
    storeDate: string;
}

const initialState: selectDateState = {
    storeDate: "",
};

const selectDateSlice = createSlice({
    name: "selectDate",
    initialState,
    reducers: {
        selectDate: (state, actions: PayloadAction<string>) => {
            state.storeDate = actions.payload; // payload - полезная нагрузка
            //console.log(state.date); // typeof state - Proxy(Object) typeof state.date - string
        },
    },
});

export const { selectDate } = selectDateSlice.actions;

export default selectDateSlice.reducer;

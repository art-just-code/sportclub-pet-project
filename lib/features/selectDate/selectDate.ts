import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface selectDateState {
    date: string;
}

const initialState: selectDateState = {
    date: "",
};

const selectDateSlice = createSlice({
    name: "selectDate",
    initialState,
    reducers: {
        select: (state, actions: PayloadAction<string>) => {
            state.date = actions.payload; // payload - полезная нагрузка
            //console.log(state.date); // typeof state - Proxy(Object) typeof state.date - string
        },
    },
});

export const { select } = selectDateSlice.actions;

export default selectDateSlice.reducer;

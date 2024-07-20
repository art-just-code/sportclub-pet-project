import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface selectDateState {
    storeDate: string;
}

const initialState: selectDateState = {
    storeDate: "",
};

const selectDateSlice = createSlice({
    name: "storeDate",
    initialState,
    reducers: {
        selectDate: (state, actions: PayloadAction<string>) => {
            state.storeDate = actions.payload; // payload - полезная нагрузка
        },
    },
});

export const { selectDate } = selectDateSlice.actions;

export default selectDateSlice.reducer;

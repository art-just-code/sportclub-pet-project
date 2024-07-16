import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isAuthState {
    isAuth: Boolean;
}

const initialState: isAuthState = {
    isAuth: false,
};

const isAuthSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        select: (state, actions: PayloadAction<Boolean>) => {
            state.isAuth = actions.payload;
        },
    },
});

export const { select } = isAuthSlice.actions;

export default isAuthSlice.reducer;

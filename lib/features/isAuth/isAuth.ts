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
        changeIsAuth: (state, actions: PayloadAction<Boolean>) => {
            state.isAuth = actions.payload;
        },
    },
});

export const { changeIsAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;

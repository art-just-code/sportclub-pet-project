import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isPopupOpenedState {
    popupIsOpened: Boolean;
}

const initialState: isPopupOpenedState = {
    popupIsOpened: false,
};

const changePopupIsOpenSlice = createSlice({
    name: "popupIsOpened",
    initialState,
    reducers: {
        changePopupIsOpen: (state, actions: PayloadAction<Boolean>) => {
            state.popupIsOpened = actions.payload;
        },
    },
});

export const { changePopupIsOpen } = changePopupIsOpenSlice.actions;

export default changePopupIsOpenSlice.reducer;

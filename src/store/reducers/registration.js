import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        registerView: true
    },
    reducers: {
        switchView: (state) => {
            state.registerView = !state.registerView;
        }
    }
});

export const { switchView } = registrationSlice.actions;

export default registrationSlice.reducer;

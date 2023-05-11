import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        registerView: false,
        loginedUserName: ""
    },
    reducers: {
        switchView: (state) => {
            state.registerView = !state.registerView;
        },
        setRegView: (state, { payload }) => {
            state.registerView = payload.regView;
        },
        setLoginedUserName: (state, { payload }) => {
            state.loginedUserName = payload.userName;
        }
    }
});

export const { switchView, setRegView, setLoginedUserName } = registrationSlice.actions;

export default registrationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        registerView: false,
        loginedUserName: localStorage.getItem("login")
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
            if (state.loginedUserName) {
                localStorage.setItem("login", state.loginedUserName);
            } else {
                localStorage.removeItem("login");
            }
        }
    }
});

export const { switchView, setRegView, setLoginedUserName } = registrationSlice.actions;

export default registrationSlice.reducer;

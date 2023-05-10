import { createSlice } from "@reduxjs/toolkit";

export const inputsSlice = createSlice({
    name: "inputs",
    initialState: {
        loginValue: "",
        passwordValue: "",
        checkedAuth: false,
        checkedReg: false
    },
    reducers: {
        setLogin: (state, { payload }) => {
            state.loginValue = payload.login;
        },
        setPassword: (state, { payload }) => {
            state.passwordValue = payload.password;
        },
        setAuthChecked: (state, { payload }) => {
            state.checkedAuth = payload.checked;
        },
        setRegChecked: (state, { payload }) => {
            state.checkedReg = payload.checked;
        },
        clearData: (state) => {
            state.loginValue = state.passwordValue = "";
        }
    }
});

export const { setLogin, setPassword, setAuthChecked, setRegChecked, clearData } = inputsSlice.actions;

export default inputsSlice.reducer;

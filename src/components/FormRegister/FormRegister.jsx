import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { switchView } from "../../store/reducers/registration";
import { setRegChecked, clearData } from "../../store/reducers/inputs";

import InputWrapper from "../InputWrapper/InputWrapper";

import styles from "./formregister.module.css";

function FormRegister() {
    const [loginErrorText, setLoginErrorText] = useState("ошибка");
    const [loginErrorTextStyles, setLoginErrorTextStyles] = useState(["error-message"]);

    const [passwordErrorText, setPasswordErrorText] = useState("ошибка");
    const [passwordErrorTextStyles, setPasswordErrorTextStyles] = useState(["error-message"]);

    const loginValue = useSelector(state => state.inputs.loginValue);
    const passwordValue = useSelector(state => state.inputs.passwordValue);
    const isCheched = useSelector(state => state.inputs.checkedReg);

    const dispatch = useDispatch();

    function validateEmail(email) {
        if (email === null || email === undefined || email === "") {
            return false;
        }

        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(pattern);
    }

    function validateLogin() {
        if (loginValue === "") {
            setLoginErrorText("Поле обязательно для заполнения");
            setLoginErrorTextStyles(["error-message", "visible"]);
            return false;
        } else if (loginValue.length < 4) {
            setLoginErrorText("Логин не должен быть короче 4-х символов");
            setLoginErrorTextStyles(["error-message", "visible"]);
            return false;
        } else if (!validateEmail(loginValue)) {
            setLoginErrorText("Введите правильный e-mail");
            setLoginErrorTextStyles(["error-message", "visible"]);
            return false;
        }

        setLoginErrorTextStyles(["error-message"]);
        return true;
    }

    function validatePasswword() {
        if (passwordValue === "") {
            setPasswordErrorText("Поле обязательно для заполнения");
            setPasswordErrorTextStyles(["error-message", "visible"]);
            return false;
        } else if (passwordValue.length < 4) {
            setPasswordErrorText("Пароль не должен быть короче 4-х символов");
            setPasswordErrorTextStyles(["error-message", "visible"]);
            return false;
        }

        setPasswordErrorTextStyles(["error-message"]);
        return true;
    }

    function validateCheckBox() {
        if (!isCheched) {
            alert("Вы должны поставить галочку");
        }

        return isCheched;
    }

    async function onRegisterClickHandler(e) {
        e.preventDefault();
        const isLoginValid = validateLogin();
        const isPasswordValid = validatePasswword();
        const accepted = validateCheckBox();
        if (isLoginValid && isPasswordValid && accepted) {
            const response = await fetch("http://localhost:3001/register", { method: "POST" });
            const j = await response.json();
            console.log(j);
        }
    }

    return (
        <form className={styles["form"]}>
            <div className={styles["auth-wrapper"]}>
                <span onClick={() => { dispatch(switchView()); dispatch(clearData()); }}>
                    Авторизоваться
                </span>
            </div>

            <div className={styles["content-wrapper"]}>
                <h2>
                    РЕГИСТРАЦИЯ
                </h2>

                <div className={styles["fields-container"]}>
                    <InputWrapper
                        inputType="text"
                        placeholder="Логин"
                        errorText={loginErrorText}
                        errorTextStyles={loginErrorTextStyles}
                    />

                    <InputWrapper
                        inputType="password"
                        placeholder="Пароль"
                        errorText={passwordErrorText}
                        errorTextStyles={passwordErrorTextStyles}
                    />

                    <div className={styles["checkbox-wrapper"]}>
                        <input type="checkbox" id="checkbox-register" className={styles["checkbox"]} onChange={(e) => dispatch(setRegChecked({checked: e.target.checked}))} />
                        <label htmlFor="checkbox-register" className={styles["label-checkbox"]}>Я согласен получать обновления на почту</label>
                    </div>
                </div>

                <button type="submit" className={styles["button-register"]} onClick={onRegisterClickHandler}>
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}

export default FormRegister;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { switchView } from "../../store/reducers/registration";
import { setAuthChecked, clearData } from "../../store/reducers/inputs";

import InputWrapper from "../InputWrapper/InputWrapper";

import styles from "./formauth.module.css";

function FormAuth() {
    const [loginErrorText, setLoginErrorText] = useState("ошибка");
    const [loginErrorTextStyles, setLoginErrorTextStyles] = useState(["error-message"]);

    const [passwordErrorText, setPasswordErrorText] = useState("ошибка");
    const [passwordErrorTextStyles, setPasswordErrorTextStyles] = useState(["error-message"]);

    const [loginFailedMessageStyles, setLoginFailedMessageStyles] = useState(["login-failed-message"])
    const customErrorTextStyles = loginFailedMessageStyles.reduce((res, style) => {
        return res = `${res} ${styles[style]}`;
    }, "");

    const loginValue = useSelector(state => state.inputs.loginValue);
    const passwordValue = useSelector(state => state.inputs.passwordValue);
    const isCheched = useSelector(state => state.inputs.checkedAuth);

    const dispatch = useDispatch();

    function validateLogin() {
        if (loginValue === "") {
            setLoginErrorText("Поле обязательно для заполнения");
            setLoginErrorTextStyles(["error-message", "visible"]);
            return false;
        } else if (loginValue.length < 4) {
            setLoginErrorText("Логин не должен быть короче 4-х символов");
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

    async function onLoginClickHandler(e) {
        e.preventDefault();
        const isLoginValid = validateLogin();
        const isPasswordValid = validatePasswword();
        const accepted = validateCheckBox();
        if (isLoginValid && isPasswordValid && accepted) {
            const response = await fetch("http://localhost:3001/login", { method: "POST" });
            const j = await response.json();
            console.log(j);
        }
    }

    return (
        <form className={styles["form"]}>
            <div className={styles["register-wrapper"]}>
                <span onClick={() => { dispatch(switchView()); dispatch(clearData()); }}>
                    Зарегистрироваться
                </span>
            </div>

            <div className={styles["content-wrapper"]}>
                <h2>
                    ВХОД
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
                        <input type="checkbox" id="checkbox-login" className={styles["checkbox"]} onChange={(e) => dispatch(setAuthChecked({checked: e.target.checked}))}/>
                        <label htmlFor="checkbox-login" className={styles["label-checkbox"]}>Я согласен получать обновления на почту</label>
                    </div>
                </div>

                <div className={styles["button-wrapper"]}>
                    <div className={customErrorTextStyles}>
                        Логин или пароль неверен
                    </div>

                    <button type="submit" className={styles["button-login"]} onClick={onLoginClickHandler}>
                        ВОЙТИ
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormAuth;

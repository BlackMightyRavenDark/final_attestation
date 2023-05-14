import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { switchView, setLoginedUserName } from "../../store/reducers/registration";
import { setAuthChecked, setRegChecked, clearLoginAndPassword } from "../../store/reducers/inputs";

import InputWrapper from "../InputWrapper/InputWrapper";

import { validateEmail } from "../../func";

import styles from "./formauth.module.css";

function FormAuth() {
    const [loginErrorText, setLoginErrorText] = useState("ошибка");
    const [loginErrorTextStyles, setLoginErrorTextStyles] = useState(["error-message"]);

    const [passwordErrorText, setPasswordErrorText] = useState("ошибка");
    const [passwordErrorTextStyles, setPasswordErrorTextStyles] = useState(["error-message"]);

    const [loginFailedMessageStyles, setLoginFailedMessageStyles] = useState(["login-failed-message"])

    const customErrorTextStyles = loginFailedMessageStyles.reduce((res, style) => `${res} ${styles[style]}`, "");

    const loginValue = useSelector(state => state.inputs.loginValue);
    const passwordValue = useSelector(state => state.inputs.passwordValue);
    const isChecked = useSelector(state => state.inputs.checkedAuth);

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
        } else if (!validateEmail(loginValue)) {
            setLoginErrorText("Введите правильный e-mail");
            setLoginErrorTextStyles(["error-message", "visible"]);
            return false;
        }

        setLoginErrorTextStyles(["error-message"]);
        return true;
    }

    function validatePassword() {
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
        if (!isChecked) {
            alert("Вы должны поставить галочку");
        }

        return isChecked;
    }

    function switchForm() {
        dispatch(clearLoginAndPassword());
        dispatch(setRegChecked({ checked: false}));
        dispatch(switchView());
    }

    async function onLoginClickHandler(e) {
        e.preventDefault();
        const isLoginValid = validateLogin();
        const isPasswordValid = validatePassword();
        const accepted = validateCheckBox();
        if (isLoginValid && isPasswordValid && accepted) {
            const jsonBody = JSON.stringify({ email: loginValue, password: passwordValue });
            try {
                const response = await fetch("http://localhost:3001/login",
                    { method: "POST", body: jsonBody, headers: { "Content-Type": "application/json" } });
                if (response.status !== 200) {
                    setLoginFailedMessageStyles(["login-failed-message", "visible"]);
                    alert(`Ошибка ${response.status} ${response.statusText}!`);
                    return;
                }
                const json = await response.json();
                dispatch(setLoginedUserName({ userName: json.user?.email }));
                dispatch(clearLoginAndPassword());
                dispatch(setAuthChecked({ checked: false }));
                dispatch(setRegChecked({ checked: false }));
            } catch (ex) {
                const errorMessage =
                    "Что-то пошло не так, как должно было пойти или пошло не туда или не в ту сторону " +
                    "или не захотело пойти или не дошло или изначально вообще не пошло или зеленые " +
                    "человечки высадились на Землю и давай пиф-паф во все стороны, паника, хаос, анархия, " +
                    "Bruce Willis облажался, весь мир в огне, сервера падают с ошибкой";
                alert(`${errorMessage} ${ex}!`);
            }
        }
        setLoginFailedMessageStyles(["login-failed-message"]);
    }

    return (
        <form className={styles["form"]}>
            <div className={styles["register-wrapper"]}>
                <span onClick={switchForm}>
                    Зарегистрироваться
                </span>
            </div>

            <div className={styles["content-wrapper"]}>
                <h2>
                    ВХОД
                </h2>

                <div className={styles["fields-container"]}>
                    <InputWrapper
                        inputType="email"
                        placeholderText="E-mail"
                        errorText={loginErrorText}
                        errorTextStyles={loginErrorTextStyles}
                    />

                    <InputWrapper
                        inputType="password"
                        placeholderText="Пароль"
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

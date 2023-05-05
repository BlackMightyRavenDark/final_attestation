import React from "react";
import { useDispatch } from "react-redux";

import { switchView } from "../../store/reducers/registration";

import InputWrapper from "../InputWrapper/InputWrapper";

import styles from "./formauth.module.css";

function FormAuth() {
    const dispatch = useDispatch();

    return (
        <form className={styles["form"]}>
            <div className={styles["register-wrapper"]}>
                <span onClick={() => dispatch(switchView())}>
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
                        errorText="ошибка"
                    />

                    <InputWrapper
                        inputType="password"
                        placeholder="Пароль"
                        errorText="ошибка"
                    />

                    <div className={styles["checkbox-wrapper"]}>
                        <input type="checkbox" id="checkbox-login" className={styles["checkbox"]} />
                        <label htmlFor="checkbox-login" className={styles["label-checkbox"]}>Я согласен получать обновления на почту</label>
                    </div>
                </div>

                <div className={styles["button-wrapper"]}>
                    <div className={styles["login-failed-message"]}>
                        Логин или пароль неверен
                    </div>

                    <button type="submit" className={styles["button-login"]}>
                        ВОЙТИ
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormAuth;

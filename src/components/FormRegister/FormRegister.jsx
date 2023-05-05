import React from "react";
import { useDispatch } from "react-redux";

import { switchView } from "../../store/reducers/registration";

import InputWrapper from "../InputWrapper/InputWrapper";

import styles from "./formregister.module.css";

function FormRegister() {
    const dispatch = useDispatch();

    return (
        <form className={styles["form"]}>
            <div className={styles["auth-wrapper"]}>
                <span onClick={() => dispatch(switchView())}>
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
                        errorText="ошибка"
                    />

                    <InputWrapper
                        inputType="password"
                        placeholder="Пароль"
                        errorText="ошибка"
                    />

                    <div className={styles["checkbox-wrapper"]}>
                        <input type="checkbox" id="checkbox-register" className={styles["checkbox"]} />
                        <label htmlFor="checkbox-register" className={styles["label-checkbox"]}>Я согласен получать обновления на почту</label>
                    </div>
                </div>

                <button type="submit" className={styles["button-register"]}>
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}

export default FormRegister;

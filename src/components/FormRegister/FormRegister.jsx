import React from "react";

import InputWrapper from "../InputWrapper/InputWrapper";

import styles from "./formregister.module.css";

function FormRegister() {
    return (
        <form className={styles["form"]}>
            <div className={styles["auth-wrapper"]}>
                <span>
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

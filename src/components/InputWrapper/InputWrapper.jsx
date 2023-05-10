import React from "react";
import { useDispatch } from "react-redux";

import { setLogin, setPassword } from "../../store/reducers/inputs";

import styles from "./inputwrapper.module.css";

function InputWrapper({inputType, placeholder, errorText, errorTextStyles}) {
    const customErrorTextStyles = errorTextStyles.reduce((res, style) => {
        return res = `${res} ${styles[style]}`;
    }, "");

    const dispatch = useDispatch();

    function onInputHandler(e) {
        if (inputType === "text") {
            dispatch(setLogin({login: e.target.value}));
        } else {
            dispatch(setPassword({password: e.target.value}));
        }
    }
    return (
        <div className={styles["input-wrapper"]}>
            <input type={inputType} placeholder={placeholder} className={styles["input"]} onInput={onInputHandler} />

            <p className={customErrorTextStyles}>
                {errorText}
            </p>
        </div>
    )
}

export default InputWrapper;

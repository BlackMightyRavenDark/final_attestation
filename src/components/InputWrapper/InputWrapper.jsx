import React from "react";

import styles from "./inputwrapper.module.css";

function InputWrapper({inputType, placeholder, errorText}) {
    return (
        <div className={styles["input-wrapper"]}>
            <input type={inputType} placeholder={placeholder} className={styles["input"]} />

            <p className={styles["error-message"]}>
                {errorText}
            </p>
        </div>
    )
}

export default InputWrapper;

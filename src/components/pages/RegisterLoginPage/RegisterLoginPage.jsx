import React from "react";

import FormRegister from "../../FormRegister/FormRegister";

import styles from "./regsterloginpage.module.css";

function RegisterLoginPage() {
    return (
        <div className={styles["bkg"]}>
            <FormRegister />
        </div>
    )
}

export default RegisterLoginPage;

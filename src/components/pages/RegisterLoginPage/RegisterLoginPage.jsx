import React from "react";

import FormAuth from "../../FormAuth/FormAuth";
import FormRegister from "../../FormRegister/FormRegister";

import styles from "./regsterloginpage.module.css";

function RegisterLoginPage() {
    return (
        <div className={styles["bkg"]}>
            <FormAuth />
            <FormRegister />
        </div>
    )
}

export default RegisterLoginPage;

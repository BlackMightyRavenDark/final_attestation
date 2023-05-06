import React from "react";
import { useSelector } from "react-redux";

import FormAuth from "../../components/FormAuth/FormAuth";
import FormRegister from "../../components/FormRegister/FormRegister";

import styles from "./regsterloginpage.module.css";

function RegisterLoginPage() {
    const regView = useSelector(state => state.registrationForm.registerView);

    return (
        <div className={styles["bkg"]}>
            { regView && <FormRegister /> }
            { !regView && <FormAuth /> }
        </div>
    )
}

export default RegisterLoginPage;

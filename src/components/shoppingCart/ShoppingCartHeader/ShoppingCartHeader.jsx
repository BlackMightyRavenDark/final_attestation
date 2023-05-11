import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setLoginedUserName, setRegView } from "../../../store/reducers/registration";

import ButtonBack from "../../../components/ButtonBack/ButtonBack";

import styles from "./shoppingcartheader.module.css";

function ShoppingCartHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(setLoginedUserName({ userName: "" }));
        dispatch(setRegView({ regView: false }));
        navigate("/module_react/reg");
    }

    return (
        <div className={styles["header-wrapper"]}>
            <div className="image-wrapper">
                <ButtonBack />
            </div>

            <span className={styles["header-title"]}>
                Корзина с выбранными товарами
            </span>

            <button className={styles["button-logout"]} onClick={logout}>
                Выйти
            </button>
        </div>
    )
}

export default ShoppingCartHeader;

import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonBack from "../../../components/ButtonBack/ButtonBack";

import styles from "./shoppingcartheader.module.css";

function ShoppingCartHeader() {
    const navigate = useNavigate();

    return (
        <div className={styles["header-wrapper"]}>
            <div className="image-wrapper">
                <ButtonBack />
            </div>

            <span className={styles["header-title"]}>
                Корзина с выбранными товарами
            </span>

            <button className={styles["button-logout"]} onClick={() => navigate("/module_react/reg")}>
                Выйти
            </button>
        </div>
    )
}

export default ShoppingCartHeader;

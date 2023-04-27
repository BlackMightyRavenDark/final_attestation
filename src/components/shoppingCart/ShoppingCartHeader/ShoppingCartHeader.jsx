import React from "react";
import { Link } from "react-router-dom";

import ButtonBack from "../../../components/ButtonBack/ButtonBack";

import styles from "./shoppingcartheader.module.css";

function ShoppingCartHeader() {
    return (
        <div className={styles["header-wrapper"]}>
            <div className="image-wrapper">
                <Link to="/module_react">
                    <ButtonBack />
                </Link>
            </div>

            <span className={styles["header-title"]}>
                Корзина с выбранными товарами
            </span>
        </div>
    )
}

export default ShoppingCartHeader;
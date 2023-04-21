import React from "react";
import { Link } from "react-router-dom";

import ButtonBack from "../../Elements/ButtonBack/ButtonBack";

import styles from "./shoppingcartheader.module.css";

function ShoppingCartHeader() {
    return (
        <div className={styles["header-wrapper"]}>
            <div className="image-wrapper">
                <Link to="/">
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

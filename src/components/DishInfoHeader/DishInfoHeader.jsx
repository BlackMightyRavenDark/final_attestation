import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ButtonBack from "../ButtonBack/ButtonBack";

import imageCart from "../../assets/header_cart.svg";

import styles from "./dishinfoheader.module.css";

function DishInfoHeader() {
    const buyedIds = useSelector(state => state.products.buyedIds);
    const totalPrice = useSelector(state => state.products.totalPrice);
    const navigate = useNavigate();

    return (
        <div className={styles["header"]}>
            <ButtonBack />

            <div className={styles["data-wrapper"]}>
                <div className={styles["cart-wrapper"]}>
                    <div className={styles["text-wrapper"]}>
                        <p>
                            {buyedIds.length.toString()} товара
                        </p>

                        <p>
                            на сумму {totalPrice} ₽
                        </p>
                    </div>

                    <img src={imageCart} alt="cart" />
                </div>

                <button className={styles["button-logout"]} onClick={() => navigate("/module_react/reg")}>
                    Выйти
                </button>
            </div>
        </div>
    )
}

export default DishInfoHeader;

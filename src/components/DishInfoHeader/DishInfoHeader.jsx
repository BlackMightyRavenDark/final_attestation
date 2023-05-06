import React from "react";
import { useSelector } from "react-redux";

import imageBack from "../../assets/back.svg";
import imageCart from "../../assets/header_cart.svg";

import styles from "./dishinfoheader.module.css";

function DishInfoHeader() {
    const buyedIds = useSelector(state => state.products.buyedIds);
    const totalPrice = useSelector(state => state.products.totalPrice);

    return (
        <div className={styles["header"]}>
            <img src={imageBack} alt="back" />

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

                <button className={styles["button-logout"]}>
                    Выйти
                </button>
            </div>
        </div>
    )
}

export default DishInfoHeader;

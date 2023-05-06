import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import image from "../../assets/header_cart.svg";

import styles from "./mainpageheader.module.css";

function MainPageHeader() {
    const buyedIds = useSelector(state => state.products.buyedIds);
    const totalPrice = useSelector(state => state.products.totalPrice);

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <span className={styles["header__cart-wrapper"]}>
                <Link to="/module_react/cart" className={styles["header__cart-link"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {buyedIds.length.toString()} товара
                        </p>

                        <p>
                            на сумму {totalPrice} ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img" />
                </Link>

                <button className={styles["button-logout"]}>
                    Выйти
                </button>
            </span>
        </header>
    )
}

export default MainPageHeader;

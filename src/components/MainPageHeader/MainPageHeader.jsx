import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import image from "../../assets/header_cart.svg";

import styles from "./mainpageheader.module.css";

function MainPageHeader() {
    const buyedDishes = useSelector(state => state.products.buyedDishes);
    const totalPrice = useSelector(state => state.products.totalPrice);
    const navigate = useNavigate();

    return (
        <header className={styles["header"]}>
            <span className={styles["header__our-prod"]}>
                НАША ПРОДУКЦИЯ
            </span>

            <span className={styles["header__cart-wrapper"]}>
                <Link to="/module_react/cart" className={styles["header__cart-link"]}>
                    <div className={styles["cart__text-wrapper"]}>
                        <p>
                            {buyedDishes.length.toString()} товара
                        </p>

                        <p>
                            на сумму {totalPrice} ₽
                        </p>
                    </div>

                    <img src={image} alt="" className="img" />
                </Link>

                <button className={styles["button-logout"]} onClick={() => navigate("/module_react/reg")}>
                    Выйти
                </button>
            </span>
        </header>
    )
}

export default MainPageHeader;

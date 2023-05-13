import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setRegView, setLoginedUserName } from "../../store/reducers/registration";
import { clearLoginAndPassword } from "../../store/reducers/inputs";
import { clearShoppingCart } from "../../store/reducers/products";

import image from "../../assets/header_cart.svg";

import styles from "./mainpageheader.module.css";

function MainPageHeader() {
    const buyedDishes = useSelector(state => state.products.buyedDishes);
    const totalPrice = useSelector(state => state.products.totalPrice);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(setLoginedUserName({ userName: "" }));
        dispatch(setRegView({ regView: false }));
        dispatch(clearLoginAndPassword());
        dispatch(clearShoppingCart());
        navigate("/module_react/reg");
    }

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

                <button className={styles["button-logout"]} onClick={logout}>
                    Выйти
                </button>
            </span>
        </header>
    )
}

export default MainPageHeader;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { setLoginedUserName, setRegView } from "../../store/reducers/registration";

import ButtonBack from "../ButtonBack/ButtonBack";

import imageCart from "../../assets/header_cart.svg";

import styles from "./dishinfoheader.module.css";

function DishInfoHeader() {
    const buyedDishes = useSelector(state => state.products.buyedDishes);
    const totalPrice = useSelector(state => state.products.totalPrice);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(setLoginedUserName({ userName: "" }));
        dispatch(setRegView({ regView: false }));
        navigate("/module_react/reg");
    }

    return (
        <div className={styles["header"]}>
            <ButtonBack />

            <div className={styles["data-wrapper"]}>
                <Link to="/module_react/cart">
                    <div className={styles["cart-wrapper"]}>
                        <div className={styles["text-wrapper"]}>
                            <p>
                                {buyedDishes.length.toString()} товара
                            </p>

                            <p>
                                на сумму {totalPrice} ₽
                            </p>
                        </div>

                        <img src={imageCart} alt="cart" />
                    </div>
                </Link>

                <button className={styles["button-logout"]} onClick={logout}>
                    Выйти
                </button>
            </div>
        </div>
    )
}

export default DishInfoHeader;

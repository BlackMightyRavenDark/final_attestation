import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../../store/reducers/products";

import ButtonBuy from "../ButtonBuy/ButtonBuy.jsx";

import styles from "./productcard.module.css";
import { useNavigate } from "react-router-dom";

function Card({id, image, title, description, cost, weight, pcs}) {
    const buyedDishes = useSelector(state => state.products.buyedDishes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getIsBuyed() {
        for (let i = 0; i < buyedDishes.length; ++i) {
            if (buyedDishes[i].id === id) {
                return true;
            }
        }
        return false;
    }

    function toggleBuy() {
        if (getIsBuyed()) {
            dispatch(removeFromCart({id}));
        } else {
            dispatch(addToCart({ id, title, cost, image }));
        }
    }

    return (
        <div className={styles["card"]} onClick={() => navigate(`/module_react/dishinfo/${id}`)}>
            <div className={styles["card__content-wrapper"]}>
                <div className={styles["img"]}>
                    <img src={image} alt="" className={styles["img"]}/>
                </div>

                <div className={styles["card__description-wrapper"]}>
                    <p>
                        {title}
                    </p>

                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className={styles["card__cost-wrapper"]}>
                <div className={styles["cost-weight"]}>
                    <span>
                        {cost} P
                    </span>

                    <span>
                        {` / ${weight}`} {pcs ? " шт." : " г."}
                    </span>
                </div>

                <ButtonBuy
                    onClickHandler={toggleBuy}
                    isActive={getIsBuyed()}
                />
            </div>
        </div>
    )
}

export default Card;

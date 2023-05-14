import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart, removeFromCart } from "../../store/reducers/products";

import ButtonBuy from "../ButtonBuy/ButtonBuy.jsx";

import { getDishIsBuyed } from "../../func";

import styles from "./productcard.module.css";

function Card({id, image, title, description, cost, weight, pcs}) {
    const buyedDishes = useSelector(state => state.products.buyedDishes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function btnBuyClickHandler(e) {
        e.stopPropagation();

        if (getDishIsBuyed(id, buyedDishes)) {
            dispatch(removeFromCart({ id }));
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
                        {cost} ₽
                    </span>

                    <span>
                        {` / ${weight}`} {pcs ? " шт." : " г."}
                    </span>
                </div>

                <ButtonBuy
                    onClickHandler={btnBuyClickHandler}
                    isBuyed={getDishIsBuyed(id, buyedDishes)}
                />
            </div>
        </div>
    )
}

export default Card;

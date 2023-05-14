import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../../store/reducers/products";

import styles from "./dishinfo.module.css";

function DishInfo({ dish }) {
    const buyedDishes = useSelector(state => state.products.buyedDishes);

    const dispatch = useDispatch();

    function getIsBuyed() {
        return buyedDishes.find(element => element.id === dish.id);
    }

    function onBtnBuyClickHandler() {
        if (getIsBuyed()) {
            dispatch(removeFromCart({ id: dish.id }));
        } else {
            const { id, title, cost, imageUrl } = dish;
            dispatch(addToCart({ id, title, cost, image: imageUrl }));
        }
    }

    return (
        <div className={styles["megawrapper"]}>
            <div className={styles["dish-container"]}>
                <img src={dish.imageUrl} alt="preview" className={styles["dish-image"]}/>

                <div className={styles["dish-info-wrapper"]}>
                    <p>
                        {dish.title}
                    </p>

                    <p>
                        {dish.description}
                    </p>

                    <div className={styles["cost-container"]}>
                        <div className={styles["cost-wrapper"]}>
                            <span>
                                {dish.cost} ₽
                            </span>

                            <span>
                                {dish.weight && ` / ${dish.weight} г.`}
                                {dish.pieces && ` / ${dish.pieces} шт.`}
                            </span>
                        </div>

                        <button className={styles["button-cart"]} onClick={onBtnBuyClickHandler}>
                            { getIsBuyed() ? "Убрать" : "В корзину" }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishInfo;

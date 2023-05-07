import React from "react";
import { useSelector } from "react-redux";

import CardCart from "../CardCart/CardCart"

import styles from "./shoppingcartlist.module.css";

function ShoppingCartList() {
    const buyedDishes = useSelector(state => state.products.buyedDishes);

    return (
        <div className={styles["card-list"]}>
            {!buyedDishes.length && <p>Корзина пуста</p>}
            {
                buyedDishes.map(element => {
                        return (
                            <CardCart
                                key={element.id}
                                id={element.id}
                                imageUrl={element.image}
                                title={element.title}
                                cost={element.cost}
                            />
                        );
                })
            }
        </div>
    )
}

export default ShoppingCartList;

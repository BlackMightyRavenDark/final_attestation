import React from "react";
import { useSelector } from "react-redux";

import styles from "./shoppingcartfooter.module.css";

function ShoppingCartFooter() {
    const totalPrice = useSelector(state => state.products.totalPrice);

    return (
        <div className={styles["footer"]}>
            <div className={styles["footer__content-wrapper"]}>
                <div className={styles["footer__text-wrapper"]}>
                    <p>
                        ЗАКАЗ НА СУММУ:
                    </p>

                    <p>
                        {totalPrice} ₽
                    </p>
                </div>

                <button onClick={() => alert("Заказ оформлен!")}>
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default ShoppingCartFooter;

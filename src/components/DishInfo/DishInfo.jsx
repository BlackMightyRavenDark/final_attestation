import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./dishinfo.module.css";

function DishInfo({ dish }) {
    const navigate = useNavigate();

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

                        <button className={styles["button-cart"]} onClick={() => navigate("/module_react/cart")}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishInfo;

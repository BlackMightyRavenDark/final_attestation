import React from "react";
import { useParams } from "react-router-dom";

import DishInfoHeader from "../DishInfoHeader/DishInfoHeader";

import dishList from "../../assets/dishes";

import styles from "./dishinfopage.module.css";

function DishInfoPage() {
    const { id } = useParams();

    return (
        <div className={styles["background"]}>
            <DishInfoHeader />

            <div className={styles["dish-container"]}>
                <img src={dishList[id].imageUrl} alt="image" className={styles["dish-image"]}/>

                <div className={styles["dish-info-wrapper"]}>
                    <p>
                        {dishList[id].title}
                    </p>

                    <p>
                        {dishList[id].description}
                    </p>

                    <div className={styles["cost-container"]}>
                        <div className={styles["cost-wrapper"]}>
                            <span>
                                {dishList[id].cost} ₽
                            </span>

                            <span>
                                {dishList[id].weight && ` / ${dishList[id].weight} г.`}
                                {dishList[id].pieces && ` / ${dishList[id].pieces} шт.`}
                            </span>
                        </div>

                        <button className={styles["button-cart"]}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DishInfoPage;

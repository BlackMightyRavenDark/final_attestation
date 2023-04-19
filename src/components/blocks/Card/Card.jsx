import React from "react";
import styles from "./card.module.css"

import ButtonBuy from "../../Elements/ButtonBuy/ButtonBuy.jsx";

function Card({image, title, description, cost, weight, pcs}) {
    return (
        <div className={styles["card"]}>
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

                <ButtonBuy />
            </div>
        </div>
    )
}

export default Card;
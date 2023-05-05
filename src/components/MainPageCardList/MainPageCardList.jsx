import React from "react";

import Card from "../ProductCard/ProductCard";

import dishList from "../../assets/dishes";

import styles from "./mainpagecardlist.module.css";

function MainPageCardList() {
    return (
        <div className={styles["card-list"]}>
            {
                dishList.map(element => {
                    return (
                        <Card
                            key={element.id}
                            id={element.id}
                            image={element.imageUrl}
                            title={element.title}
                            description={element.description}
                            cost={element.cost}
                            weight={element.weight ? element.weight : element.pieces}
                            pcs={element.pieces}
                        />
                    )
                })
            }
        </div>
    )
}

export default MainPageCardList;

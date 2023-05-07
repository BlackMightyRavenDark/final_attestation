import React, { useEffect, useState } from "react";

import Card from "../ProductCard/ProductCard";

import styles from "./mainpagecardlist.module.css";

function MainPageCardList() {
    const [dishList, setDishList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dishes").then(data => data.json()).then(json => setDishList(json));
    }, []);

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

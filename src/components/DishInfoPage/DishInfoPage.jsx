import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DishInfoHeader from "../DishInfoHeader/DishInfoHeader";
import DishInfo from "../DishInfo/DishInfo";

import styles from "./dishinfopage.module.css";

function DishInfoPage() {
    const { id } = useParams();
    const [dishInfo, setDishInfo] = useState(null);

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/dishes/${id}`).then(data => data.json()).then(json => setDishInfo(json));
        } catch {
            setDishInfo(null); //не работает :'(
        }
    }, []);

    return (
        <div className={styles["background"]}>
            <DishInfoHeader />
            { dishInfo !== null && <DishInfo dish={dishInfo} /> }
        </div>
    )
}

export default DishInfoPage;

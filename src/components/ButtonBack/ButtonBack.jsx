import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import imageBack from "../../assets/backWhite.svg";
import imageBackActive from "../../assets/back.svg";

import styles from "./buttonback.module.css";

function ButtonBack() {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const navigate = useNavigate();

    function onMouseOverHandler() {
        setIsMouseOver(true);
    }

    function onMouseOutHandler() {
        setIsMouseOver(false);
    }

    return (
        <img
            src={isMouseOver ? imageBackActive : imageBack}
            alt="back"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            onClick={() => navigate(-1)}
            className={styles["button"]}
        />
    )
}

export default ButtonBack;

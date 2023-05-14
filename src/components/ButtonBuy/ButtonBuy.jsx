import React, { useState } from "react";

import styles from "./buttonbuy.module.css";

function ButtonBuy({onClickHandler, isBuyed}) {
    const [isHovered, setIsHovered] = useState(false);
    const styleList = ["button"];
    if (isBuyed) styleList.push("buyed");
    if (isHovered) styleList.push("hovered");
    const actualStyles = styleList.reduce((res, element) => `${res} ${styles[element]}`, "");

    function onMouseOverHandler() {
        setIsHovered(true);
    }

    function onMouseOutHandler() {
        setIsHovered(false);
    }

    return (
        <button
            className={actualStyles}
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            onClick={onClickHandler}>
                <div></div>
        </button>
    )
}

export default ButtonBuy;

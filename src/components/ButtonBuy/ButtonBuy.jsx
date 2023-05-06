import React, { useState } from "react";

import imageBuy from "../../assets/buy.svg";
import imageBuyActive from "../../assets/buyHovered.svg";

function ButtonBuy({onClickHandler, isActive}) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function onMouseOverHandler() {
        setIsMouseOver(true);
    }

    function onMouseOutHandler() {
        setIsMouseOver(false);
    }

    return (
        <img
            src={isMouseOver || isActive ? imageBuyActive : imageBuy}
            alt="buy"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            onClick={(e) => { e.stopPropagation(); onClickHandler(); }}
        />
    )
}

export default ButtonBuy;

import React from "react";

import ShoppingCartHeader from "../../shoppingCart/ShoppingCartHeader/ShoppingCartHeader";
import ShoppingCartList from "../../shoppingCart/ShoppingCartList/ShoppingCartList";
import ShoppingCartFooter from "../../shoppingCart/ShoppingCartFooter/ShoppingCartFooter";

function ShoppingCartPage() {
    return (
        <>
            <ShoppingCartHeader />
            <ShoppingCartList />
            <ShoppingCartFooter />
        </>
    )
}

export default ShoppingCartPage;

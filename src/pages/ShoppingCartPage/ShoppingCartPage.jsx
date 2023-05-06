import React from "react";

import ShoppingCartHeader from "../../components/shoppingCart/ShoppingCartHeader/ShoppingCartHeader";
import ShoppingCartList from "../../components/shoppingCart/ShoppingCartList/ShoppingCartList";
import ShoppingCartFooter from "../../components/shoppingCart/ShoppingCartFooter/ShoppingCartFooter";

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

import { createSlice } from "@reduxjs/toolkit";

import dishList from "../../assets/dishes";

function getBuyedIdsFromLocalStorage() {
    const shoppingCartString = localStorage.getItem("shoppingCart");
    if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
        return [];
    }

    return shoppingCartString.split(",");
}

function getTotalPriceBuyed() {
    function isPresent(idString, ids) {
        for (let i = 0; i < ids.length; ++i) {
            if (ids[i] === idString) return true;
        }
        return false;
    }

    const idList = getBuyedIdsFromLocalStorage();

    return idList ? dishList.reduce((sum, item) => {
        return isPresent(item.id.toString(), idList) ? sum += item.cost : sum;
    }, 0) : 0;
}

export const productSlice = createSlice({
    name: "products",
    initialState: {
        buyedIds: getBuyedIdsFromLocalStorage(),
        totalPrice: getTotalPriceBuyed()
    },
    reducers: {
        addToCart: (state, action) => {
            function isPresent(idString) {
                for (let i = 0; i < state.buyedIds.length; ++i) {
                    if (state.buyedIds[i] === idString) return true;
                }
                return false;
            }

            state.buyedIds.push(action.payload.id.toString());
            
            state.totalPrice = dishList.reduce((sum, item) => {
                return isPresent(item.id.toString()) ? sum += item.cost : sum;
            }, 0);

            localStorage.setItem("shoppingCart", state.buyedIds.join(","));
        },
        removeFromCart: (state, action) => {
            function isPresent(idString) {
                for (let i = 0; i < state.buyedIds.length; ++i) {
                    if (state.buyedIds[i] === idString) return true;
                }
                return false;
            }

            state.buyedIds = state.buyedIds.filter(element => action.payload.id.toString() !== element);
            if (state.buyedIds.length > 0) {
                state.totalPrice = dishList.reduce((sum, item) => {
                    return isPresent(item.id.toString()) ? sum += item.cost : sum;
                }, 0);

                localStorage.setItem("shoppingCart", state.buyedIds.join(","));
            } else {
                state.totalPrice = 0;
                localStorage.removeItem("shoppingCart");
            }
        }
    }
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;

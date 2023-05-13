import { createSlice } from "@reduxjs/toolkit";

function getBuyedDishesFromLocalStorage() {
    const shoppingCartString = localStorage.getItem("shoppingCart");
    if (shoppingCartString === null || shoppingCartString === undefined || shoppingCartString === "") {
        return [];
    }
    return JSON.parse(shoppingCartString);
}

function getTotalBuyedPrice() {
    const list = getBuyedDishesFromLocalStorage();
    return list.reduce((sum, element) => {
        return sum += element.cost;
    }, 0);
}

export const productSlice = createSlice({
    name: "products",
    initialState: {
        buyedDishes: getBuyedDishesFromLocalStorage(),
        totalPrice: getTotalBuyedPrice()
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const { id, title, cost, image } = payload;
            const dish = { id, title, cost, image };
            state.buyedDishes.push(dish);
            state.totalPrice += cost;
            localStorage.setItem("shoppingCart", JSON.stringify(state.buyedDishes));
        },
        removeFromCart: (state, { payload }) => {
            state.buyedDishes = state.buyedDishes.filter(element => payload.id !== element.id);
            state.totalPrice = state.buyedDishes.reduce((sum, { cost }) => {
                return sum += cost;
            }, 0);
            if (state.buyedDishes.length > 0) {
                localStorage.setItem("shoppingCart", JSON.stringify(state.buyedDishes));
            } else if (localStorage.getItem("shoppingCart")) {
                localStorage.removeItem("shoppingCart");
            }
        },
        clearShoppingCart: (state) => {
            state.buyedDishes = [];
            state.totalPrice = 0;
            localStorage.removeItem("shoppingCart");
        }
    }
});

export const { addToCart, removeFromCart, clearShoppingCart } = productSlice.actions;

export default productSlice.reducer;

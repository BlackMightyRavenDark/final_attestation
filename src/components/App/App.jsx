import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage/ShoppingCartPage";
import RegisterLoginPage from "../../pages/RegisterLoginPage/RegisterLoginPage";
import DishInfoPage from "../../components/DishInfoPage/DishInfoPage";

function App() {
    const userLogin = useSelector(state => state.registrationForm.loginedUserName);
    const authPageUrl = "/module_react/reg";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/module_react/reg" element={ userLogin ? <Navigate to="/module_react"/> : <RegisterLoginPage /> } />

                <Route path="/module_react" element={ userLogin ? <MainPage /> : <Navigate to={authPageUrl}/> } />

                <Route path="/module_react/dishinfo/:id" element={ userLogin ? <DishInfoPage /> : <Navigate to={authPageUrl}/> } />

                <Route path="/module_react/cart" element={ userLogin ? <ShoppingCartPage /> : <Navigate to={authPageUrl}/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

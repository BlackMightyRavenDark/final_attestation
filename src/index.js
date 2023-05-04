import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import MainPage from "./components/pages/MainPage/MainPage";
import ShoppingCartPage from "./components/pages/ShoppingCartPage/ShoppingCartPage";
import RegisterLoginPage from "./components/pages/RegisterLoginPage/RegisterLoginPage";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/module_react/reg" element={
              <>
                <RegisterLoginPage />
              </>
            } />

            <Route path="/module_react" element={
              <>
                <MainPage />
              </>
            } />

            <Route path="/module_react/cart" element={
              <>
                <ShoppingCartPage />
              </>
            } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import { configureStore } from '@reduxjs/toolkit'

import productReducer from "./reducers/products";
import registrationReducer from './reducers/registration';

export default configureStore({
    reducer: {
        products: productReducer,
        registrationForm: registrationReducer
    }
});

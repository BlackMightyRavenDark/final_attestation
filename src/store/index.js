import { configureStore } from '@reduxjs/toolkit'

import productReducer from "./reducers/products";
import registrationReducer from './reducers/registration';
import inputsReducer from './reducers/inputs';

export default configureStore({
    reducer: {
        products: productReducer,
        registrationForm: registrationReducer,
        inputs: inputsReducer
    }
});

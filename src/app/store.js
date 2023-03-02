import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import orderSlice from "../features/orders/orderSlice";
import userSlice from "../features/users/userSlice";


export const store = configureStore({
    reducer:{
        products: productSlice,
        orders: orderSlice,
        users: userSlice
    }
})
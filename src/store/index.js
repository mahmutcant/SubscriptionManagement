import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import orders from "./orders";
const store = configureStore({
    reducer: {
        auth,
        orders
    }
})
export default store
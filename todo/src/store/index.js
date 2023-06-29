import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
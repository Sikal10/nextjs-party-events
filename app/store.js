import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../lib/slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})
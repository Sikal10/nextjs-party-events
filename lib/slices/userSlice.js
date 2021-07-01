import {createSlice} from "@reduxjs/toolkit";
import {signup, logout} from "./app-auth/authAPI";

const initialState = {
    loading: "idle",
    serverMsg: "",
    errorMsg: "",
    user: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: () => {

    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = "loading"
        },
        [signup.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.serverMsg= action.payload.message
        },
        [signup.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg= action.payload.error.message
        },
        [logout.fulfilled]: (state) => {
            state.user = null
        }
    },
});

export const selectUser = state => state.user;

export default userSlice.reducer;


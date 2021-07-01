import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "../../../config";

export const signup = createAsyncThunk("user/signup", async (signupDetails, thunkAPI) => {
    console.log("signupdetails", signupDetails);
    try {
        const {data} = await axios.post(`${API_URL}/register`, signupDetails);
        console.log(data);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }

});

export const logout = createAsyncThunk("user/logout", async () => {
    console.log("Log out");
});
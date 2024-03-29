import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "user/createUser", async (data) => {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/users/create`, data);
        return response.data;
    }
);

export const logginUser = createAsyncThunk(
    "user/logginUser", async (data) => {
        const response = await axios.post(`${import.meta.env.VITE_API}/api/users/login`, data,{
            withCredentials: false
        });
        console.log(response)
        return response.data
    }
);

const initialState = {
    isLoggedIn: false,
    loading: false,
    error: false,
    errorMsg: "",
    userInfo: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false;
            state.errorMsg = "";
            state.userInfo = {};
            localStorage.removeItem("access_token")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error occured."
            })
            .addCase(logginUser.pending, (state) => {
                state.loading = true;
                state.isLoggedIn = false;
            })
            .addCase(logginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.userInfo = action.payload.details;
                localStorage.setItem("access_token", action.payload.details.access_token);
            })
            .addCase(logginUser.rejected, (state, action) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.error = action.error.message || "Error occured";
            })
    }
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
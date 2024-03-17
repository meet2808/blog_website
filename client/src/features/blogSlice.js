import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createBlog = createAsyncThunk(
    "blog/createBlog", async (data) => {
        const access_token = JSON.parse(localStorage.getItem("access_token"));
        console.log(access_token)
        const response = await axios.post(`${import.meta.env.VITE_API}/api/blog/create`, data, {
            headers : {
                Authorization : `Bearer ${access_token}`
            }
        })
        return response.data;
    }
)

const initialState = {
    loading: false,
    error: false,
    errorMsg: "",
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.errorMsg = "";
                console.log(action.payload)
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMsg = action.error.message || "Error is occured";
            })
    }
});

export default blogSlice.reducer;
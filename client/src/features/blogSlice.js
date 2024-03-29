import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import conf from "../conf/conf";

export const createBlog = createAsyncThunk(
    "blog/createBlog", async (data) => {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.post(`${import.meta.env.VITE_API}/api/blog/create`, data, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        return response.data;
    }
)

export const updateBlog = createAsyncThunk(
    "blog/updateBlog", async (data) => {
        // console.log("data :", data,)
        let { id, ...formData } = data;
        const access_token = localStorage.getItem("access_token");
        const response = await axios.patch(`${conf.apiUrl}/api/blog/update/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        return response.data;
    }
)

export const deleteBlog = createAsyncThunk(
    "blog/deleteBlog", async (blogId) => {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.delete(`${conf.apiUrl}/api/blog/delete/${blogId}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        return response.data;
    }
)

export const getAllBlogs = createAsyncThunk(
    "blog/getAllBlogs", async () => {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.get(`${import.meta.env.VITE_API}/api/blog/all`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        return response.data;
    }
)

export const getBlog = createAsyncThunk(
    "blog/getBlog", async (blogId) => {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.get(`${conf.apiUrl}/api/blog/${blogId}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.data;
    }
)

export const getBlogByCategory = createAsyncThunk(
    "blog/getBlogByCategory", async (category) => {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.get(`${conf.apiUrl}/api/blog/category/${category}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.data;
    }
)

const initialState = {
    loading: false,
    error: false,
    errorMsg: "",
    blogs: [],
    categoryBlogList: [],
    blog: {},
    blogUpdated: false
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
            .addCase(updateBlog.pending, (state, action) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
                state.blogUpdated = false;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.errorMsg = "";
                state.blogUpdated = true;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMsg = action.error.message || "Error is occured";
                state.blogUpdated = false;
            })
            .addCase(getAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.errorMsg = "";
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMsg = action.error.message || "Error is occured";
            })
            .addCase(getBlog.pending, (state, action) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.errorMsg = "";
                state.blogs = action.payload;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMsg = action.error.message || "Error is occured while getting the blog information";
            })
            .addCase(getBlogByCategory.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
            })
            .addCase(getBlogByCategory.fulfilled, (state, action) => {
                state.error = false;
                state.errorMsg = "";
                state.categoryBlogList = action.payload;
            })
            .addCase(getBlogByCategory.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                state.errorMsg = action.error.message || "Error occured while fetching the data by blog category"
            })
            .addCase(deleteBlog.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMsg = "";
            })
            .addCase(deleteBlog.fulfilled, (state) => {
                state.loading = false;
                state.error = false;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMsg = action.error.message || "Error occured while deleting the blog"
            })
    }
});

export default blogSlice.reducer;
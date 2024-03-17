import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userslice";
import blogReducer from "../features/blogSlice"

const rootReducer = combineReducers({
    user: userReducer,
    blog : blogReducer
})

export default rootReducer;
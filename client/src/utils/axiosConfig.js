import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { store } from "../app/store";

const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(
    (config) => {
        const state = store.getState(); // Access the Redux state
        const accessToken = state.user.userInfo.accessToken; // Assuming user.accessToken is where the access token is stored in the state
        if (accessToken) {
            const decodedToken = jwtDecode(accessToken);
            const currentDate = new Date();
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                // Token has expired, handle it here (e.g., logout user)
                // You may want to dispatch an action to handle token expiration
                console.log("Token has expired");
            }
            config.headers["Authorization"] = "Bearer " + accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosJWT;
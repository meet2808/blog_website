import { logoutUser } from "../features/userslice";
import { persistStore } from "redux-persist";

export const logoutMiddleware = store => next => action => {
    if (action.type === logout.type) {
        persistStore(store).purge(); // Clear data stored by Redux Persist
    }
    return next(action);
}
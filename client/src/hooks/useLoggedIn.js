import { useContext, createContext } from "react"

export const LoggedInContext = createContext({
    isLoggedIn : false,
    handleLoggedIn : (loggedIn) => {}
});

export const LoggedInProvider = LoggedInContext.Provider;

export const useLoggedIn = () => {
    return useContext(LoggedInContext)
}
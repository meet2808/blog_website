import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.user.isLoggedIn);

    useEffect(() => {
        if(!loggedIn) navigate("/sign-in")
    }, [loggedIn, navigate])

    return loggedIn ? children : null;
}

export default AuthLayout;
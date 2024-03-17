import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.user.isLoggedIn);

    if (loggedIn) return children;
    else if (!loggedIn) return navigate("sign-in");
}

export default AuthLayout;
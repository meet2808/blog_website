import { useNavigate, Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/userslice";

const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/sign-in")
    }
    return (
        <div className="flex items-center justify-between px-20 py-5">
            <Link to={"/"} className="font-bold text-2xl no-underline">TechBlog</Link>
            <div className="flex gap-20">
                <Link
                    to={"/"}
                    className="font-semibold hover:text-gray-600"
                >Home</Link>
                <Link
                    to={"/categories"}
                    className="font-semibold hover:text-gray-600"
                >Category</Link>
            </div>

            <div className="flex items-center gap-16">
                {
                    isLoggedIn ? (
                        <>
                            {/* <BsPersonCircle size={35} /> */}
                            <h2
                                className="font-semibold hover:text-gray-600"
                                onClick={() => handleLogout()}
                            >Log Out</h2>
                        </>
                    ) : (
                        <>
                            <Link
                                to={"/sign-in"}
                                className="b-blue-100 border-black-900 no-underline font-semibold hover:text-gray-600"
                            >Sign In</Link>
                            <Link
                                to={"/sign-up"}
                                className="border-gray-900 no-underline font-semibold hover:text-gray-600"
                            >Sign Up</Link>
                        </>

                    )
                }


            </div>
        </div>
    )
}

export default Header;
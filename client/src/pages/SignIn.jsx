import { Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logginUser } from "../features/userslice";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isError = useSelector(state => state.user.error)
    const errorMsg = useSelector(state => state.user.errorMsg)
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(logginUser(data))
        if(isError && errorMsg !== ""){
            console.log("Error while log in.")
        } else {
            navigate("/")
        }
    }

    return (
        <>
            <form
                className="my-10 mx-auto w-[400px] px-[5px] py-[10px]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-[30px] font-bold uppercase text-center">Sign In</h1>

                <div className="py-1">
                    <Input
                        type={"email"}
                        name="email"
                        label="Email"
                        placeholder={"Email"}
                        {...register("email")}
                    />

                    <Input
                        type={"password"}
                        name="password"
                        label="Password"
                        placeholder={"Password"}
                        {...register("password")}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-slate-900 h-12 w-full text-white uppercase border hover:text-slate-900 hover:border-slate-900 hover:bg-transparent hover:ease-in-out hover:delay-10"
                >Sign In</button>
                <span className="text-neutral-600 text-[15px]">Don't have an account?<Link href="/sign-up">Sign Up</Link></span>
            </form>
        </>
    )
}

export default SignIn;
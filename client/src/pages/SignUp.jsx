import { Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userslice";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (data.password === data.cp) {
            let { cp, ...obj } = data;
            dispatch(createUser(obj))
            navigate("/sign-in")
        } else {
            console.log("password doesn't match");
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-10 mx-auto w-[400px] px-[5px] py-[10px]"
            >
                <h1 className="text-[30px] font-bold uppercase text-center">Sign Up</h1>

                <div className="py-1">
                    <Input
                        type={"email"}
                        name="email"
                        label="Email"
                        placeholder={"Email"}
                        {...register('email')}
                    />

                    <Input
                        type={"password"}
                        name="password"
                        label="Password"
                        placeholder={"Password"}
                        {...register('password')}
                    />

                    <Input
                        type={"password"}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder={"Re-enter Password"}
                        {...register('cp')}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-slate-900 h-12 w-full text-white uppercase border hover:text-slate-900 hover:border-slate-900 hover:bg-transparent hover:ease-in-out hover:delay-10"
                >Sign Up</button>
                <span className="text-neutral-600 text-[15px]">Already have an account?<Link href="/sign-in">Sign In</Link></span>
            </form>
        </>
    )
}

export default SignUp;
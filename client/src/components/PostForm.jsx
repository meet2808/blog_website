import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, RTE, Select } from "../components";
import { useForm } from "react-hook-form";
import { createBlog } from "../features/blogSlice";


const PostForm = ({ title, isEditable }) => {
    // const userId = useSelector(state => state.user.userInfo)
    // const access_token = useSelector(state => state.user.userInfo.access_token);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm()
    const rteRef = useRef(null);

    const onSubmit = async (data) => {
        const contentValue = rteRef.current.getValue();
        data = { ...data, contentValue }

        if (!isEditable) {
            dispatch(createBlog(data))
        }
    }

    return (
        <form
            className="flex flex-col gap-2 w-4/5 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-bold text-3xl">{title}</h1>
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register('title')}
            />

            <Select
                label="Category :"
                options={["ai", "iot", "programming", "technology"]}
                {...register('category')}
            />

            <RTE
                label="Content :"
                placeholder={"Write your content here"}
                className="border border-black-600"
                name="content"
                ref={rteRef}
            />

            <Input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                label="Image :" {...register('image')}
            />

            <Button
                type="submit"
                text={"Save"}
                className="w-full py-2 px-10 border hover:border-slate-900 hover:text-slate-900 hover:bg-transparent hover:ease-in-out hover:delay-10"
                bgColor={"bg-slate-900"}
                textColor={"text-white"}
            />
        </form>
    )
}

export default PostForm;
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, RTE, Select } from "../components";
import { useForm } from "react-hook-form";
import { createBlog, updateBlog } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import appwriteImageService from "../appwrite/file"

const PostForm = ({ formtitle, isEditable, blog }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: blog?.title || "",
            category: blog?.category || "",
            content: blog?.content || "",
            img: blog?.img || ""
        }
    })
    const rteRef = useRef(null);

    const onSubmit = async (data) => {
        const content = rteRef.current.getValue();
        if (!isEditable) {
            const file = await appwriteImageService.uploadImage(data.img[0]);
            if (file) {
                let id = file.$id;
                data = { ...data, image: id, content };
                let { img, ...formData } = data;
                dispatch(createBlog(formData));
            }
        } else if (isEditable) {
            // here we add content and blog id in data and at the blogSlice we remove blog id from it and send as a parmas
            let id = blog._id
            data = { ...data, content, id };
            let { img, ...formData} = data;
            dispatch(updateBlog(formData));
            navigate("/")
        }
    }

    return (
        <form
            className="flex flex-col gap-2 w-4/5 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-bold text-3xl">{formtitle}</h1>
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
                defaultValue={blog.content}
                ref={rteRef}
            />

            <Input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                label="Image :" {...register('img')}
            />

            <Button
                type="submit"
                text={isEditable ? "Save" : "Create"}
                className="w-full py-2 px-10 border hover:border-slate-900 hover:text-slate-900 hover:bg-transparent hover:ease-in-out hover:delay-10"
                bgColor={"bg-slate-900"}
                textColor={"text-white"}
            />
        </form>
    )
}

export default PostForm;
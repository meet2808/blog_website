import { useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getBlog, deleteBlog } from "../features/blogSlice";
import appwriteImageService from "../appwrite/file";
import parse from "html-react-parser";

const Blog = () => {
    let { blogId } = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let blog;
    let user = useSelector(state => state.user.userInfo)
    let blogs = useSelector(state => state.blog.blogs);
    blog = blogs.filter(blog => blog._id === blogId);
    blog = blog[0]

    if (!blog) {
        dispatch(getBlog(blogId))
        blog = useSelector(state => state.blog.blog)
    }
    console.log(blog)

    const handleUpdate = () => {
        if (user.id === blog.author_id) {
            navigate(`/updatepost/${blogId}`)
        }
    }

    const handleDelete = () => { 
        dispatch(deleteBlog(blog._id));
        navigate("/")
    }
    return (
        <>
            <section className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-3xl font-bold">{blog.title}</p>

                    <div className="flex flex-row items-center gap-10">
                        <FaEdit size={30} color="green" className="cursor-pointer" onClick={() => handleUpdate()} />
                        <FaTrash size={25} color="red" className="cursor-pointer" onClick={() => handleDelete()} />
                    </div>
                </div>

                <img
                    src={appwriteImageService.getImagePreview(blog.image)}
                    alt="Blog Img"
                    className="h-[500px] w-full"
                />
                <p>By {blog.author_id}, Published on {blog.writeDate}.</p>
                <p className="whitespace-normal">{parse(blog.content)}</p>
            </section>
        </>
    )
}

export default Blog;
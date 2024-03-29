import { PostForm } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Editpost = () => {
    let { id } = useParams();
    let dispatch = useDispatch();
    let blogs = useSelector(state => state.blog.blogs);
    let blog = blogs.filter(blog => blog._id === id)
    blog = blog[0];

    return(
        <>
            <PostForm formtitle={"Update Blog"} blog={blog} isEditable />
        </>
    )
}

export default Editpost;
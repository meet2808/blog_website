import { useParams } from "react-router-dom";
import { FeatureCard } from "../components"
import { useSelector, useDispatch } from "react-redux";
import { getBlogByCategory } from "../features/blogSlice";

const Category = () => {
    let { slug } = useParams();
    const dispatch = useDispatch();
    const blogsList = useSelector(state => state.blog.blogs);
    let blogs;
    blogs = blogsList.filter(blog => blog.category === slug)
    if (!blogs) {
        dispatch(getBlogByCategory(slug))
        blogs = useSelector(state => state.blog.categoryBlogList)
    }
    return (
        <div>
            <p className="font-bold text-xl uppercase text-blue-700">{slug}</p>
            <section>
                {
                    blogs?.map((blog) => (
                        <FeatureCard
                            key={blog._id}
                            img={blog.image}
                            title={blog.title}
                            blogTitle={blog.title}
                            category={blog.category}
                            id={blog._id}
                            author={blog.author_id}
                            publishDate={blog.writeDate}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default Category;
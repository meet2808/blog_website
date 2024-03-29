import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../features/blogSlice";
import { FeatureCard, CategorySection } from "../components";
import img from "../assets/hero-image.jpg";

const Home = () => {
    const dispatch = useDispatch();
    const blogsList = useSelector(state => state.blog.blogs);
    useEffect(() => {
        dispatch(getAllBlogs())
    }, []);

    return (
        <div>
            <section>
                {
                    blogsList?.map((blog) => (
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
            <CategorySection />
        </div>
    )
}

export default Home;
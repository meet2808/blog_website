import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FeatureCard } from "../components";
import { getAllBlogs } from '../features/blogSlice';

const Categories = () => {
    const dispatch = useDispatch();
    let blogs = []
    // Takes blogs array from the blogSlice's blogs state
    blogs = useSelector(state => state.blog.blogs);
    // we dispatch getAllBlogs api method in blogSlice's if there is not blogs array find or not store in the slice state
    if(!blogs){
        dispatch(getAllBlogs());
        blogs = useSelector(state => state.blog.blogs);
    }

    // Object to store one blog per category
    let blogsList = [];
    // Iterate over blogs and select one blog from each category
    blogs.forEach(blog => {
        let category = blog.category;
        // Check if the category is not already in blogsList
        if (!blogsList.some(b => b.category === category)) {
            blogsList.push(blog);
        }
    });
    // console.log(blogsList)
    return (
        <div>
            <p className='font-bold text-lg uppercase'>Explore Different Categories</p>
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
        </div>
    )
}

export default Categories
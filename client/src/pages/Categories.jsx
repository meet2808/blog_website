import React from 'react'
import { FeatureCard } from "../components"
import img from "../assets/ai.jpg"

const Categories = () => {
    return (
        <div>
            <p className='font-bold text-lg uppercase'>Explore Different Categories</p>

            <section>
                <FeatureCard
                    img={img}
                    title={"AI Blog"}
                    blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"}
                    category={"Ai"}
                    id={2}
                    author={"John Doe"}
                    publishDate={"August 22, 2018"}
                />

                <FeatureCard
                    img={img}
                    title={"Programming Blog"}
                    blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"}
                    category={"technology"}
                    id={2}
                    author={"John Doe"}
                    publishDate={"August 22, 2018"}
                />
            </section>
        </div>
    )
}

export default Categories
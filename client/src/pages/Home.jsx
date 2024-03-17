import { FeatureCard, CategorySection } from "../components";
import img from "../assets/hero-image.jpg";

const Home = () => {
    return (
        <div>
            <section>
                <FeatureCard
                    img={img}
                    title={"Programming Blog"}
                    blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"}
                    category={"technology"}
                    id={2}
                    author={"Meet Panchal"}
                    publishDate={"April 23, 2020"}
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

                <FeatureCard
                    img={img}
                    title={"Programming Blog"}
                    blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"}
                    category={"technology"}
                    id={2}
                    author={"Bill Wills"}
                    publishDate={"April 23, 2023"}
                />
            </section>
            <CategorySection />
        </div>
    )
}

export default Home;
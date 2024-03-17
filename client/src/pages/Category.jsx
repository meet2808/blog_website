import { useParams, Outlet } from "react-router-dom";
import { FeatureCard } from "../components"
import img from "../assets/hero-image.jpg"

const Category = () => {
    let { slug } = useParams();
    console.log(slug);

    return (
        <div>
            <p className="font-bold text-xl uppercase text-blue-700">{slug}</p>
            <section>
            <FeatureCard img={img} title={"Programming Blog"} blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"} category={"technology"} id={2} />

            <FeatureCard img={img} title={"Programming Blog"} blogTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsum vitae aperiam!"} category={"technology"} id={2} />
            </section>
        </div>
    )
}

export default Category;
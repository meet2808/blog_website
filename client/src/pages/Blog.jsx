import { useParams } from "react-router-dom";
import img from "../assets/hero-image.jpg"

const Blog = () => {
    let { blogId } = useParams();
   
    return (
        <>
            <section className="flex flex-col gap-3">
                <p className="text-3xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint atque doloremque ipsam.</p>

                <img src={img} alt="Blog Img" className="h-[500px] w-full" />
                <p>By Meet Panchal, Published on April 21, 2020.</p>
                <p className="whitespace-normal">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae corporis accusantium dolores molestias commodi perspiciatis corrupti explicabo non fugit sunt nam aspernatur maiores, debitis iure esse, optio consequatur, atque porro labore natus quae! Eaque pariatur dicta, rem consectetur animi praesentium! Aperiam veniam corporis numquam ducimus illum consectetur impedit. Optio voluptates porro nesciunt doloremque! Debitis cupiditate officia porro magni eveniet ullam dolore quis, facere nobis numquam voluptate, perferendis suscipit qui quam dolorem. Aliquam nostrum aperiam explicabo aspernatur nobis. Reprehenderit voluptatibus iste, molestias provident sint suscipit voluptate itaque veritatis magni optio, quam similique? Delectus numquam est asperiores! Veritatis esse quibusdam doloribus eveniet.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis quis minima dicta illo eum, quos voluptates consectetur quam facere. Dignissimos ab doloribus, architecto quis earum aliquam possimus labore laborum minus dolor blanditiis consequuntur fuga tempora doloremque totam libero magnam id eos alias culpa sint sit magni voluptatum. Sint, labore. Voluptates asperiores molestiae incidunt eveniet? Autem alias voluptate vel perferendis ad fuga dolore earum suscipit eligendi, tempora animi, hic ducimus nisi eos, neque omnis delectus? Saepe recusandae deleniti minima nobis assumenda velit quidem nihil architecto nostrum quia, veritatis incidunt dolores porro unde neque et illum voluptatum explicabo, exercitationem nisi dolore.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus est tempore, magni itaque provident consequatur, porro ea dolor laboriosam amet quis reprehenderit commodi debitis quasi distinctio beatae recusandae natus quod possimus animi, perspiciatis id similique. Nemo id dolore corrupti assumenda fugit similique dolorem labore omnis? Debitis numquam velit iste nihil. Laboriosam, sint aperiam dignissimos reiciendis voluptatem minima tenetur sit esse odio dicta voluptatum hic vero aut dolore explicabo veniam dolor! Explicabo odit incidunt libero illo delectus distinctio nostrum deleniti blanditiis beatae ullam suscipit eius quasi, omnis consequatur sequi impedit nobis doloremque! Dicta aliquam alias beatae et nam quisquam possimus officiis. Fugit rerum eligendi assumenda distinctio pariatur fuga mollitia officiis incidunt, culpa voluptate nemo esse iste. Necessitatibus accusantium fuga voluptatum voluptates cupiditate quia et repellat, vel totam sed enim quas eos nobis iure porro! Sit perferendis blanditiis veritatis saepe. Fugit possimus magnam distinctio esse, maxime facere deleniti? Dolores architecto at voluptates, voluptatibus eaque ullam pariatur veniam incidunt provident nemo officiis molestiae modi ab assumenda ad nesciunt dolore corrupti repudiandae accusamus? Tenetur nobis commodi aliquam optio harum culpa dolorum eos nulla molestiae placeat numquam voluptates, reiciendis rem maiores ipsa sit enim earum vel doloremque! Ducimus aliquam nulla alias tempore! Quae, cum.
                </p>
            </section>
        </>
    )
}

export default Blog;
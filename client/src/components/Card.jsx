import { Link } from "react-router-dom";
import { Suspense } from "react";

const Card = ({ img, text, category }) => {
    return (
        <Link to={`/category/${category}`}>
            <div className="flex flex-col my-8 shadow-xl overflow-hidden gap-2 rounded">
                <Suspense>
                    <img
                        src={img}
                        alt={`${text}-image`}
                        className="h-[350px] w-[320px]"
                    />
                </Suspense>
                <p className="py-5 mr-3 font-bold uppercase self-center">{text}</p>
            </div>
        </Link>
    )
}

export default Card;
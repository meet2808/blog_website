import { Link } from "react-router-dom";

const Card = ({ img, text, category }) => {
    return (
        <Link to={`/category/${category}`}>
            <div className="flex flex-col my-8 shadow-xl overflow-hidden gap-2 rounded">
                <img
                    src={img}
                    alt={`${text}-image`}
                    className="h-[350px] w-[320px]"     
                />
                <p className="py-5 mr-3 font-bold uppercase self-center">{text}</p>
            </div>
        </Link>
    )
}

export default Card;
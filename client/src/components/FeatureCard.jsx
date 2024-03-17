import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";

const FeatureCard = ({ img, blogTitle, id, title, category, author, publishDate }) => {
    return (
        <>
            <article className='flex flex-col shadow my-2'>
                <img src={img} alt={title} className='h-[500px] object-fill' />
                <div className='flex flex-col gap-3 p-4'>
                    <p className='text-blue-700 font-semibold uppercase'>{category}</p>
                    <p className='text-3xl font-bold'>{blogTitle}</p>
                    <p>By {author}, published on {publishDate}</p>
                    <Link
                        to={`/${id}`}
                        className='flex flex-row items-center gap-2 text-gray-800 hover:text-black-900'
                    >Read More <BsArrowRightShort size={30}/></Link>
                </div>
            </article >
        </>
        // <div className='shadow-lg'>
        //     <img src={img} alt={title} className='h-[470px] object-fill' />
        //     <p>TECHNOLOGY</p>
        //     <p>{blogTitle}</p>
        //     <Link
        //         to={`/${id}`}
        //     >Read More</Link>
        // </div>
    )
}

export default FeatureCard;
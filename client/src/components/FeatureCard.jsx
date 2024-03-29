import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";
import appwriteImageService from "../appwrite/file"

const FeatureCard = ({ img, blogTitle, id, title, category, author, publishDate }) => {
    return (
        <>
            <article className='flex flex-col shadow my-2'>
                <Suspense>
                    <img
                        src={appwriteImageService.getImagePreview(img)}
                        alt={title}
                        className='h-[500px] object-fill'
                    />
                </Suspense>

                <div className='flex flex-col gap-3 p-4'>
                    <p className='text-blue-700 font-semibold uppercase'>{category}</p>
                    <p className='text-3xl font-bold'>{blogTitle}</p>
                    <p>By {author}, published on {publishDate}</p>
                    <Link
                        to={`/blog/${id}`}
                        className='flex flex-row items-center gap-2 text-gray-800 hover:text-black-900'
                    >Read More <BsArrowRightShort size={30} /></Link>
                </div>
            </article >
        </>
    )
}

export default FeatureCard;
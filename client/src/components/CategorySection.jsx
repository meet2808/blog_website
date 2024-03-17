import React from 'react';
import Card from './Card';
import ai from "../assets/ai.jpg";
import iot from "../assets/iot.jpg";
import newTechnology from "../assets/new-technology.jpg";
import programming from "../assets/programming.jpg";

const CategorySection = () => {
    return (
        <div className='mt-2'>
            <p className='text-2xl font-bold'>Explore Categories</p>
            <section className="grid grid-cols-4 gap-2">
                <Card img={ai} text={"AI"} category={"ai"} />
                <Card img={iot} text={"IOT"} category={"iot"} />
                <Card img={newTechnology} text={"TECHNOLOGY"} category={"technology"} />
                <Card img={programming} text={"programming"} category={"programming"} />
            </section>
        </div>
    )
}

export default CategorySection
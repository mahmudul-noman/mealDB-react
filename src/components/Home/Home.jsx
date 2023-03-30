import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'

const Home = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    return (
        <div>
            <div className="meal-container">
                {
                    foods.map(food => <SingleCard
                        food = {food}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;
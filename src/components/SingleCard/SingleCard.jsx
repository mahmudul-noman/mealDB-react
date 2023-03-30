import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleCard = ({ food }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={food.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food.name}</h2>
                <p>Price: $ {food.price}</p>
                <p>Ratings: {food.ratings} <FontAwesomeIcon icon={faStar} /></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
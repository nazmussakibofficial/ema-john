import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css';


const Review = ({ product, handleRemove }) => {
    const { name, price, quantity, img, id } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='del-cont'>
                    <button onClick={() => handleRemove(id)} className="del-btn">
                        <FontAwesomeIcon className='del-icon' icon={faTrashAlt}>

                        </FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Review;
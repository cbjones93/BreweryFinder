import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

export const StarRating = () => {
    const [rating, setRating] = useState()
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label>
                        <input type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)} />
                        <FaStar class="star" color={ratingValue <=rating ? "#ffc107" : "#e4e5e9"} /></label>
                )
            })}
        </div>
    );
};
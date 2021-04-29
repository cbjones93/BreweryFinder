import React from "react"
import {Link, useHistory} from 'react-router-dom';

export const BreweryReviewCard = ({review,}) =>{
    const history =useHistory();
    return (
        <div className="breweryReviewCard">
            <h3>User:{review.userId}</h3>
            <p>{review.review}</p>
        </div>
    )
}
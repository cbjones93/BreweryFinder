import React from "react"
import {Link, useHistory} from 'react-router-dom';

export const BreweryReviewCard = ({eachBreweryReview}) =>{
    const history =useHistory();
    return (
        <div className="breweryReviewCard">
            <h3>User:{eachBreweryReview.userId}</h3>
            <p>{eachBreweryReview.review}</p>
        </div>
    )
}
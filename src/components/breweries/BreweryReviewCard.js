import React from "react"
import {Link, useHistory} from 'react-router-dom';

export const BreweryReviewCard = ({user}) =>{
    const history =useHistory();
    return (
        <div className="breweryReviewCard">
            <h3>User:{user.user.name}</h3>
            <p>{user.review}</p>
        </div>
    )
}
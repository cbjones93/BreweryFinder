import React from "react"
import { useHistory} from 'react-router-dom';


const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const BreweryReviewCard = ({user}) =>{
    const history =useHistory();
    return (
        <div className="breweryReviewCard">
            <h4>User:{user.user.name}</h4>
            <p>{user.review}</p>
        </div>
    )
}
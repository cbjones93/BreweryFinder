
import React from "react";
import {Link} from 'react-router-dom'

export const FollowCard = ({ follow, handleDeleteFollowing }) => {
    return (
        <div className="follow-card">
                    
            <div className="card-content ">
                <h3>
                    <span className="followCardName">{follow.user.name}</span>
                    <p className="followCardEmail">{follow.user.email}</p>
                    <Link to={`/userbreweries/${follow.user.id}`}><button className="UserFavorites" type="button" >{follow.user.name}'s Breweries List </button> </Link>
                    <button className="buttonRemoveFollow" type="button" onClick={() => handleDeleteFollowing(follow.id)}> Stop Following </button>

                </h3>
            </div>
        </div>
    )
}
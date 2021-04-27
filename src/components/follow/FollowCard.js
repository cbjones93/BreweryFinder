
import React from "react";

export const FollowCard = ({ follow, handleDeleteFollowing }) => {
    return (
        <div className="follow-card">
                    
            <div className="card-content ">
                <h3>
                    <span className="followCardName">{follow.user.name}</span>
                    <p className="followCardEmail">{follow.user.email}</p>
                    <button className="buttonRemoveFollow" type="button" onClick={() => handleDeleteFollowing(follow.id)}> Stop Following </button>

                </h3>
            </div>
        </div>
    )
}
import React from "react";

export const FollowerCard = ({follower}) =>{
    return (
        <div className="follower-card">
            <h3>
                <span className="followerCardId"> {follower.userId}</span>
        
            </h3>
        </div>
    )
}
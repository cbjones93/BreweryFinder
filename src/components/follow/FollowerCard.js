import React from "react";
import {Link} from 'react-router-dom'

export const FollowerCard = ({follower, handleAddFollow}) =>{
    return (
        <div className="follower-card">
            <h3>
                <span className="followerCardId"> {follower.name}</span>   
                <Link to={`/follow`}><button type="button" className="searchButton" onClick={()=>handleAddFollow(follower.id)}> Follow User</button>
           </Link>
            </h3>
        </div>
    )
}
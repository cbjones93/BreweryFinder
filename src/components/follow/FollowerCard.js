import React from "react";
import {Link} from 'react-router-dom'

export const FollowerCard = ({follower, handleAddFollow, following}) =>{
    return (
        <div className="follower-card">
            <h3>
                <span className="followerCardId"> {follower.name}</span> 
                <Link to={`/userbreweries/${follower.id}`}><button className="UserFavorites" type="button" >{follower.name}'s Breweries List </button> </Link> 
                {following.find(follow=>
             follow.userId===follower.id) ? <div></div> :
                <Link to={`/follow`}><button type="button" className="searchButton" onClick={()=>handleAddFollow(follower.id)}> Follow User</button>
           </Link>}
            </h3>
        </div>
    )
}
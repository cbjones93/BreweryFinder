import React, {useState,useEffect} from "react"
import { useHistory} from 'react-router-dom';
import {getAllFollowing} from '../modules/FollowManager'


const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
export const BreweryReviewCard = ({user, handleAddFollow}) =>{
    const [following, setFollowing] = useState([])
    
    const getFollowing = () => {
        const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
        getAllFollowing(currentUser)
        .then(followingFromAPI => {
            // eachFollower we need to get user object
         
            setFollowing(followingFromAPI)
        })
    }
    useEffect(() => {
        getFollowing()
    }, [])
    console.log(following.currentUserId)
    const history =useHistory();
    return (
        <div className="breweryReviewCard">
            <h4>User:{user.user.name}</h4>
            {following.map(follow=>
             follow.userId===user.user.id ? <div></div> :
            <button type="button" className="searchButton" onClick={()=>handleAddFollow(user.user.id)}> Follow User</button>)}
            <p>{user.review}</p>
        </div>
    )
}
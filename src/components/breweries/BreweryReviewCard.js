import React, {useState,useEffect} from "react"
import {getAllFollowing} from '../modules/FollowManager'



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
    const handleUpdateFollow = () =>{
        handleAddFollow(user.user.id).then(getFollowing)
    }
    useEffect(() => {
        getFollowing()
    }, [])
   
    return (
        <div className="breweryReviewCard">
            <h4>User:{user.user.name}</h4>
            {following.find(follow=>
             follow.userId===user.user.id) ? <div></div> :
            <button type="button" className="searchButton" onClick={handleUpdateFollow}> Follow User</button>}
            <p>{user.review}</p>
        </div>
    )
}
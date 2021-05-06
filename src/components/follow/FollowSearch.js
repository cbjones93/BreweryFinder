import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom'
import { getAllFollowing, followUser, usersToFollow } from '../modules/FollowManager'


export const SearchBar = ({ search }) => {
    const [following, setFollowing] = useState([])
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const getFollowing = () => {
        getAllFollowing(currentUser)
            .then(followingFromAPI => {
                // eachFollower we need to get user object

                setFollowing(followingFromAPI)

            })
    }
    const handleAddFollow = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": currentUser
        }
        followUser(newUserObject)
            .then(() => usersToFollow())
        .then(getFollowing)
    }
    useEffect(() => {
        getFollowing()
    }, [])
    return (
        <div className="searchBox">

            {following.find(follow =>
                follow.userId === search.id) ? null :
                <>
                    <h3>{search.name}</h3>
                    <button type="button" className="searchButton" onClick={() => handleAddFollow(search.id)}> Follow User</button>
                </>
            }

        </div>
    )
}
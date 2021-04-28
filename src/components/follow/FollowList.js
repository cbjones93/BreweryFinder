import React, { useEffect, useState } from 'react';
import { FollowCard } from './FollowCard'
import { FollowerCard } from './FollowerCard'
import { deleteFollowing, getAllFollowing, getAllFollowers, getUsers } from '../modules/FollowManager'
import { useHistory, Link } from 'react-router-dom'

export const FollowingList = () => {
    const history = useHistory();
    const handleDeleteFollowing = id => {
        deleteFollowing(id)
            .then(() => getAllFollowing().then(setFollowing).then(window.location.reload()));
    };
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [users, setUsers] = useState([]);

    const getFollowing = () => {
        const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
        return getAllFollowing(currentUser).then(followingFromAPI => {
            setFollowing(followingFromAPI)
        });
    };
    const getFollowers = () => {
        const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
        return getAllFollowers(currentUser).then(followersFromAPI => {
            setFollowers(followersFromAPI)
        })
    }
    const getUserById = () => {
        return getUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    }
    useEffect(() => {
        getFollowing();
    }, [])
    useEffect(() => {
        getFollowers()
    }, [])
    useEffect(() => {
        getUserById()
    }, [])

    return (
        <div className="following-container-cards">
            <h2 className="following_list">People You Follow</h2>
            <Link to={`/follow/add`}>
                <button className="addFollowButton">Follow People</button>
            </Link>
            {following.map(follow => {
                if (follow.userId != parseInt(sessionStorage.getItem("app_user_id")))
                    return (
                        <FollowCard
                            key={follow.id}
                            follow={follow}
                            handleDeleteFollowing={handleDeleteFollowing} />)
            })}
            <h2 className="followers_list">People That Follow You</h2>
            {followers.map(follower => {
                if (follower.currentUserId === users.id)
                    return (
                        <FollowerCard
                            key={follower.id}
                            follower={follower} />)
            })}
        </div>


    )
}
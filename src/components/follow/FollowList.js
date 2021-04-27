import React, { useEffect, useState } from 'react';
import { FollowCard } from './FollowCard'
import { deleteFollowing, getAllFollowing } from '../modules/FollowManager'
import { useHistory, Link } from 'react-router-dom'

export const FollowingList = () => {
    const history = useHistory();
    const handleDeleteFollowing = id => {
        deleteFollowing(id)
            .then(() => getAllFollowing().then(setFollowing).then(window.location.reload()));
    };
    const [following, setFollowing] = useState([]);

    const getFollowing = () => {
        const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
        return getAllFollowing(currentUser).then(followingFromAPI => {
            setFollowing(followingFromAPI)
        });
    };
    useEffect(() => {
        getFollowing();
    }, [])
    return (
        <div className="following-container-cards">
            <h2 className="following_list">People You Follow</h2>
            {/* <Link to={`/follow/add`}>
    <button className="addFollowButton">Follow People</button>
</Link> */}
            {following.map(follow => {
                if (follow.userId != parseInt(sessionStorage.getItem("app_user_id")))
                    return (
                        <FollowCard
                            key={follow.id}
                            follow={follow}
                            handleDeleteFollowing={handleDeleteFollowing} />)
            })}
        </div>
    )
}
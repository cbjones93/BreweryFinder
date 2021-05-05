import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getAllFollowing} from '../modules/FollowManager'


export const SearchBar= ({handleAddFollow, search}) =>{
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
    return (
        <div className="searchBox">
   
            {following.find(follow=>
             follow.userId===search.id) ? <div></div> :
             <>
             <h3>{search.name}</h3>
            <Link to={`/follow`}><button type="button" className="searchButton" onClick={()=>handleAddFollow(search.id)}> Follow User</button></Link>
            </>
            }
         
        </div>
    )
}
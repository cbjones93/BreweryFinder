import React, { useState, useEffect } from 'react';
import { getBreweryById } from '../modules/BreweryManager'
import { getUserBreweriesByBreweryId, AddNewUserBrewery } from '../modules/UserBreweryManager';
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import { BreweryReviewCard } from './BreweryReviewCard'
import { BreweryDetailCard } from "./BreweryDetailCard"
import { UserBreweryCard } from './UserBreweriesCard'
import {getAllFollowing , followUser } from '../modules/FollowManager'

export const BreweryDetail = (getAndSetUserBreweryRelationship) => {
    const [brewery, setBrewery] = useState({})
    const [usersFrombreweries, setUsersFromBreweries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [followers, setFollowers] = useState([])
    const { breweryId } = useParams();
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const history = useHistory();
    
    const getUsersFromUserBreweries = () => {
        return getUserBreweriesByBreweryId(breweryId)
        .then(breweriesFromAPI =>  setUsersFromBreweries(breweriesFromAPI))
    }

    const handleAddToBreweriesToVisit = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": false,
            "review": ""
        }
        AddNewUserBrewery(newUserBreweryObject)
            .then(() => getUserBreweriesByBreweryId(breweryId).then(setUsersFromBreweries)).then(window.alert("Added to your 'Places I Wanna Go' ")).then(getAndSetUserBreweryRelationship)
    }
    const handleAddToBreweriesIveBeen = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": true,
            "review":""
        }
        AddNewUserBrewery(newUserBreweryObject)
            .then(() => getUserBreweriesByBreweryId(breweryId).then(setUsersFromBreweries)).then(window.alert("Added to your 'Places I've Been'")).then(getAndSetUserBreweryRelationship)
    }
    const handleAddFollow=id =>{
        const newUserObject = {
            "userId":id,
            "currentUserId": currentUser
        }
        followUser(newUserObject)
        .then(()=>getAllFollowing().then(setFollowers).then(window.location.reload()))
    }

    useEffect(() => {
        getUsersFromUserBreweries()
    }, [breweryId])



    useEffect(() => {
        getBreweryById(breweryId)
            .then(b => {
                setBrewery({
                    id: b.id,
                    name: b.name,
                    state: b.state,
                    city: b.city,
                    street: b.street,
                    website_url: b.website_url,
                    phone: b.phone,
                    postal_code: b.postal_code
                });
                setIsLoading(false)
            });

    }, [breweryId]);
    
    return (<>
        <BreweryDetailCard
            brewery={brewery}
        />
                    <UserBreweryCard
                        brewery={brewery}
                        handleAddToBreweriesIveBeen={handleAddToBreweriesIveBeen}
                        handleAddToBreweriesToVisit={handleAddToBreweriesToVisit}
                         />
               
        <div>
            <h3>Other User Reviews:</h3>
            {usersFrombreweries.filter(user => user.review && user.userId !==currentUser).map(user =>  {
                    return (
                        <BreweryReviewCard
                            key={user.id}
                            user={user}
                            handleAddFollow={handleAddFollow}
                        />
                    )
                } 
            )}
            </div>


    </>
    )
}
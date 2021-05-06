import React, { useState, useEffect } from 'react';
import { getBreweryById } from '../modules/BreweryManager'
import { getUserBreweriesByBreweryId } from '../modules/UserBreweryManager';
import { useParams } from "react-router-dom"
import { BreweryReviewCard } from './BreweryReviewCard'
import { BreweryDetailCard } from "./BreweryDetailCard"
import { UserBreweryCard } from './UserBreweriesCard'
import { followUser } from '../modules/FollowManager'

export const BreweryDetail = () => {
    const [brewery, setBrewery] = useState({})
    const [usersFrombreweries, setUsersFromBreweries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    // const [following, setFollowing] = useState([])
    const { breweryId } = useParams();
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));


    const getUsersFromUserBreweries = () => {
        return getUserBreweriesByBreweryId(breweryId)
            .then(breweriesFromAPI => setUsersFromBreweries(breweriesFromAPI))
    }
    const handleAddFollow = id => {
        const newUserObject = {
            "userId": id,
            "currentUserId": currentUser
        }
        return followUser(newUserObject)
            .then(getUsersFromUserBreweries)
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
        />

        <div>
            <h3>Other User Reviews:</h3>
            {usersFrombreweries.filter(user => user.review && user.userId !== currentUser).map(user => {
                return (
                    <BreweryReviewCard
                        key={user.userId}
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
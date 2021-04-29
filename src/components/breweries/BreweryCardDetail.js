import React, { useState, useEffect } from 'react';
import { getBreweryById } from '../modules/BreweryManager'
import { useParams } from "react-router-dom"
import { BreweryReviewCard } from './BreweryReviewCard'
import { getUserBreweriesByBreweryId, AddNewUserBrewery } from '../modules/UserBreweryManager';
import {ReviewForm} from '../favorites/BreweryReviewForm'

export const BreweryDetail = () => {
    const [brewery, setBrewery] = useState({})
    const [usersFrombreweries, setUsersFromBreweries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { breweryId } = useParams();
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const getUsersFromUserBreweries = () => {
        getUserBreweriesByBreweryId(breweryId)
            .then(breweriesFromAPI => {
                setUsersFromBreweries(breweriesFromAPI)
            })
    }
    const handleAddToBreweriesToVisit = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": false
        }
        AddNewUserBrewery(newUserBreweryObject)
        .then(()=>getUserBreweriesByBreweryId(breweryId).then(setUsersFromBreweries)).then(window.alert("Added to your 'Places I Wanna Go' "))
    }
    const handleAddToBreweriesIveBeen = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": true
        }
             let yes= window.confirm("Added brewery to your 'Places I've Been' list. Would you like to leave a review?")
        if (yes ===true){ <ReviewForm />
        } else {AddNewUserBrewery(newUserBreweryObject)
            .then(()=>getUserBreweriesByBreweryId(breweryId).then(setUsersFromBreweries))}
    }
    useEffect(() => {
        getUsersFromUserBreweries()
    }, [breweryId])

    const cleanPhone = (number => {
        // cleaned strips everything out of number string if its not a number (ex: dashes, decimals, spaces)
        const cleaned = ('' + number).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            const formattedNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3]
            return formattedNumber
        }
        return null
    })
    useEffect(() => {
        console.log("useEffect", breweryId)
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
    return (
        <div className="breweryCard">
            <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesToVisit(brewery.id)}>I wanna go here!</button>
            <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesIveBeen(brewery.id)}>I've been here!</button>
            <div className="card-content">
                <h3>{brewery.name}</h3> 
                <h4>Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</h4>
                <p>Website: <a href={brewery.website_url}>{brewery.website_url}</a></p>
                <p>Phone: {cleanPhone(brewery.phone)}</p>
                <div>Reviews:{usersFrombreweries.filter(user=>user.review).map(user => {
                    return (
                        <BreweryReviewCard
                            key={user.id}
                            user={user}
                            name={user.name} />
                    )
                })}</div>
            </div>
        </div>
    )
}
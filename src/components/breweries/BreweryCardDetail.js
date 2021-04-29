import React, { useState, useEffect } from 'react';
import {getBreweryById} from '../modules/BreweryManager'
import { useParams} from "react-router-dom" 
import {BreweryReviewCard} from './BreweryReviewCard'
import {getUserBreweriesByBreweryId } from '../modules/UserBreweryManager';

export const BreweryDetail = () =>{
    const [brewery, setBrewery] = useState({})
    const [usersFrombreweries, setUsersFromBreweries] = useState([])
    const [isLoading, setIsLoading]= useState(true);
    const {breweryId} = useParams();
    const getUsersFromUserBreweries = () => {
        getUserBreweriesByBreweryId(breweryId)
        .then(breweriesFromAPI => {
            setUsersFromBreweries(breweriesFromAPI)
        })
    }
  
    useEffect(()=>{
        getUsersFromUserBreweries()
    },[breweryId])

    const cleanPhone = (number => {
        const cleaned = ('' + number).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
          const formattedNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3]
          return formattedNumber
        }
        return null
      })
    useEffect(()=>{
        console.log("useEffect", breweryId)
        getBreweryById(breweryId)
        .then(b =>{
            setBrewery({
                id:b.id,
                name:b.name,
                state:b.state,
                city:b.city,
                street:b.street,
                website_url:b.website_url,
                phone:b.phone,
                postal_code:b.postal_code
            });
            setIsLoading(false)
        });

    }, [breweryId]);
    return (
        <div className="breweryCard">
        <div className="card-content">
            <h3>{brewery.name}</h3>
            <h4>Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</h4>
            <p>Website: <a href= {brewery.website_url}>{brewery.website_url}</a></p>
            <p>Phone: {cleanPhone(brewery.phone)}</p>
            <p>Rating:</p>
            <p>Reviews:{usersFrombreweries.map(user =>{
                return (
                    <BreweryReviewCard 
                    key={user.id}
                    user= {user}
                    name={user.name} />
                )
            })}</p>
        </div>
    </div>
    )
}
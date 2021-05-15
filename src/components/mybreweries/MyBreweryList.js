import React, { useEffect, useState } from 'react';
import { MyBreweryCard } from './MyBreweryCard'
import { getAllUserBreweries, DeleteUserBrewery } from '../modules/UserBreweryManager'
import "./UserBrewery.css"


export const MyBreweryList = () => {
    const [myBreweries, setMyBreweries] = useState([]);
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));


    const handleDeleteMyBrewery = id => {
        if (window.confirm("Do you want to delete this brewery?")) {
            DeleteUserBrewery(id)
                .then(() => getAllUserBreweries().then(setMyBreweries))
        }
    }

    const getUserBreweries = () => {
        return (getAllUserBreweries(currentUser)
            .then(myBreweriesFromAPI => {
                setMyBreweries(myBreweriesFromAPI)
            }))
    }


    useEffect(() => {
        getUserBreweries()
    }, [])

    return (
        <div className="myBrewery-container-cards">
            <h1 className="myBrewery_list">My Breweries</h1>
            <h3> Places I've been</h3>
            {myBreweries.map(brewery => {
                if (brewery.userId === currentUser && brewery.beenToBrewery === true)
                    return (
                        <MyBreweryCard
                            key={brewery.id}
                            brewery={brewery}
                            handleDeleteMyBrewery={handleDeleteMyBrewery}
                            getUserBreweries={getUserBreweries} />
                    )
              
            })}
            <h3>Places I Wanna Go</h3>
            {myBreweries.map(brewery => {
                if (brewery.userId === currentUser && brewery.beenToBrewery === false)
                    return (
                        <MyBreweryCard
                            key={brewery.id}
                            brewery={brewery}
                            handleDeleteMyBrewery={handleDeleteMyBrewery}
                            getUserBreweries={getUserBreweries} />

                    )
                  
              

            })}
        </div>
    )
}
import React, { useEffect, useState } from 'react';

import { UserBreweryCard } from './UserBreweryCard'
import { getAllUserBreweries, DeleteUserBrewery } from '../modules/UserBreweryManager'
import {useParams} from 'react-router-dom'


export const UserBreweryList = () => {
    const [myBreweries, setMyBreweries] = useState([]);
    const {targetedUser} = useParams();
  
    const handleDeleteMyBrewery = id => {
        if (window.confirm("Do you want to delete this brewery?")) {
            DeleteUserBrewery(id)
                .then(() => getAllUserBreweries().then(setMyBreweries))
        }
    }

    const getUserBreweries = () => {
        return (getAllUserBreweries(targetedUser)
            .then(myBreweriesFromAPI => {
                setMyBreweries(myBreweriesFromAPI)
            }))
    }


    useEffect(() => {
        getUserBreweries()
    }, [targetedUser])

    return (
        <div className="myBrewery-container-cards">
            <h1 className="myBrewery_list">My Breweries</h1>
            <h3> Places I've Been</h3>
            {myBreweries.map(brewery => {
                if (brewery.beenToBrewery === true){
                    return (
                      <> 
                        < UserBreweryCard 
                            key={brewery.id}
                            brewery={brewery}
                            handleDeleteMyBrewery={handleDeleteMyBrewery}
                            getUserBreweries={getUserBreweries} />
                            </>
                    )
                }
                  
            })}
            <h3>Places I Wanna Go</h3>
            {myBreweries.map(brewery => {
                if (brewery.beenToBrewery === false){
                    return (
                        <>
                        < UserBreweryCard 
                            key={brewery.id}
                            brewery={brewery}
                            handleDeleteMyBrewery={handleDeleteMyBrewery}
                            getUserBreweries={getUserBreweries} />
</>
                    )
                }
                  
              

            })}
        </div>
    )
}
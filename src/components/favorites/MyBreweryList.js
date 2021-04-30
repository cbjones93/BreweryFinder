import React, { useEffect, useState } from 'react';
import {MyBreweryCard} from './MyBreweryCard'
import { useHistory, Link } from 'react-router-dom'
import {getAllUserBreweries, DeleteUserBrewery, getBrewerybyUserBreweryId} from '../modules/UserBreweryManager'
import {getAllBreweries} from '../modules/BreweryManager'

export const MyBreweryList = () =>{
    const [myBreweries, setMyBreweries] = useState([]);
    const [breweries, setBreweries] = useState([]);
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const history = useHistory();

    const handleDeleteMyBrewery = id =>{
        DeleteUserBrewery(id)
        .then(()=>getAllUserBreweries().then(setMyBreweries)).then(window.location.reload())
    }
const getUserBreweries = ()=>{
    return (getAllUserBreweries(currentUser)
    .then(myBreweriesFromAPI =>{
        setMyBreweries(myBreweriesFromAPI)
    }))
}
const getBreweries = () =>{
return getBrewerybyUserBreweryId().then(breweriesFromAPI =>{
    setBreweries(breweriesFromAPI)
})
}

useEffect(()=>{
    getBreweries()
},[])

useEffect(()=>{
    if (breweries.length >0) {
    getUserBreweries()
    }
}, [breweries])

return (
    <div className="myBrewery-container-cards">
            <h2 className="myBrewery_list">My Breweries</h2>
            {breweries.map(breweries =>{
                if(breweries.userId === currentUser)
                return (
                    <MyBreweryCard 
                    key={breweries.id}
                    breweries={breweries}
                    handleDeleteMyBrewery= {handleDeleteMyBrewery} />
                )
            })}
            </div>
)
}
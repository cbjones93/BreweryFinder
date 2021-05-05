import React from "react"
import { Link, useHistory } from 'react-router-dom';
import { updateUserBrewery } from "../modules/UserBreweryManager";
import {ReviewForm} from './BreweryReviewForm'

export const UserBreweryCard = ({ brewery, handleDeleteMyBrewery, getUserBreweries}) => {
    const history = useHistory();
    const toggleVisited = breweryObj =>{
        const breweryToEdit = {...breweryObj}
        breweryToEdit.beenToBrewery= !breweryToEdit.beenToBrewery
        updateUserBrewery(breweryToEdit)
        .then(getUserBreweries)
    }
    return (
        <>
            <div className="breweryCard">
                <div className="card-content">
               
                    <h4>{brewery.brewery.name}</h4>
                    <p> {brewery.brewery.city}, {brewery.brewery.state}</p>
                    <Link to={`/brewery/${brewery.brewery.id}`}><button className="details">Details</button></Link>
                   
                </div>
            </div>
        </>
    )
    // }
}
import React from "react"
import { Link } from 'react-router-dom';
import { updateUserBrewery } from "../modules/UserBreweryManager";


export const MyBreweryCard = ({ brewery, handleDeleteMyBrewery, getUserBreweries}) => {

    
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
                    <p>
                    {(brewery.beenToBrewery===true && !(brewery.review.length >0)) ? "Leave a review on the details page!" : " "}
                    </p>
                    <Link to={`/brewery/${brewery.brewery.id}`}><button className="details">Details</button></Link>
                    <button className="buttonChangeToFalse" type="button" onClick={() => toggleVisited(brewery)}>{brewery.beenToBrewery?"I've not been here yet": "I've been here!"  }</button>
                    <button className="buttonRemoveMyBrewery" type="button" onClick={() => handleDeleteMyBrewery(brewery.id)}> Remove Brewery  </button>
                </div>
            </div>
        </>
    )
  
}
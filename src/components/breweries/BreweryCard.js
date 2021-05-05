import React from "react"
import {Link, useHistory} from 'react-router-dom';

export const BreweryCard = ({eachBrewery}) =>{
   
    return (
        <div className="breweryCard">
            <div className="card-content">
                <h3>{eachBrewery.name}</h3>
                <h4>State:{eachBrewery.state}</h4>
                <h4>City:{eachBrewery.city}</h4>
                <h4>Address:{eachBrewery.address}</h4>
                <p>Rating:</p>
                <p>Reviews:</p>
            </div>
        </div>
    )
}
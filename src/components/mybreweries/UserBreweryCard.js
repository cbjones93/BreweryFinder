import React from "react"
import { Link } from 'react-router-dom';



export const UserBreweryCard = ({ brewery}) => {

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
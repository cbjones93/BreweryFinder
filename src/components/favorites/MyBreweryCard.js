import React from "react"
import { Link, useHistory } from 'react-router-dom';

export const MyBreweryCard = ({ breweries, handleDeleteMyBrewery }) => {
    const history = useHistory();
    
    console.log(breweries.beenToBrewery) 
    return (
        <>
            {breweries.beenToBrewery === true ? 
            <div className="breweryCard">
                <div className="card-content">
                <h3>Places I've Been</h3>
                    <h3>{breweries.brewery.name}</h3>
                    <p>{breweries.brewery.beenToBrewery}</p>
                    <Link to={`/brewery/${breweries.brewery.id}`}><button className="details">Details</button></Link>
                    <button className="buttonRemoveMyBrewery" type="button" onClick={() => handleDeleteMyBrewery(breweries.id)}> Remove Brewery  </button>
                </div>
            </div>
               : <div className="breweryCard">
               <div className="card-content">
               <h3>Places I Wanna Go</h3>
                   <h3>{breweries.brewery.name}</h3>
                   <p>{breweries.brewery.beenToBrewery}</p>
                   <Link to={`/brewery/${breweries.brewery.id}`}><button className="details">Details</button></Link>
                   <button className="buttonRemoveMyBrewery" type="button" onClick={() => handleDeleteMyBrewery(breweries.id)}> Remove Brewery  </button>
               </div>
           </div>
}
        </>
    )
    // }
}
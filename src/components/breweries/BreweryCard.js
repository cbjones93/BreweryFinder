import React from "react"
import {Link, useHistory} from 'react-router-dom';

export const BreweryCard = ({brewery}) =>{
    const history = useHistory();
    return (
        <div className="breweryCard">
            <div className="card-content">
                <h3>{brewery.name}</h3>
                <h4>State:{brewery.state}</h4>
                <h4>City:{brewery.city}</h4>
            </div>
        </div>
    )
}
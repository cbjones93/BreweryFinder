import React from "react"
import { Link, useHistory } from 'react-router-dom';

export const BreweryDetailCard = ({brewery}) =>{
    const history = useHistory();
    const cleanPhone = (number => {
        // cleaned strips everything out of number string if its not a number (ex: dashes, decimals, spaces)
        const cleaned = ('' + number).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            const formattedNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3]
            return formattedNumber
        }
        return null
    })
    return (
        <div className="breweryCard">
        <div className="card-content">
            <h3>{brewery.name}</h3> 
            <h4>Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</h4>
            <p>Website: <a href={brewery.website_url}>{brewery.website_url}</a></p>
            <p>Phone: {cleanPhone(brewery.phone)}</p>
            </div>
            </div>
    )
}
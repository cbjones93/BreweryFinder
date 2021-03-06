import React, { useEffect, useState } from 'react'
import { getBreweriesByState } from '../modules/BreweryManager'
import './BrewerySearch.css'
import { Link } from 'react-router-dom'

export const BrewerySearch = () => {
    // const [cities, setCities] = useState([])
    const [breweries, setBreweries] = useState([])
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState("")
    const handleSelectState = (event) => {
        getBreweriesByState(event.target.value)
            .then(breweriesFromAPI => setBreweries(breweriesFromAPI))
    }

    const handleSelectCity = (event) => {
        setSelectedCity(event.target.value)
    }
    const getCitiesFromState = () => {
        const cities = Array.from(new Set(breweries.map(brewery => brewery.city))).sort()
        setCities(cities)
    }
    useEffect(() => {
        getCitiesFromState()
    }, [breweries])

    return (
        <div>
            <div className="brewerySearchBox">
                <div className="stateSelection">
                    <h3>Select a state</h3>
                    <select id="states" name="ST" onChange={handleSelectState}>
                        <option value="0">Select a State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">District of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {breweries.length > 0 ?
                    <div className="citySelection">
                        <h3>Select a city</h3>
                        <select id="cities" onChange={handleSelectCity}>
                            {cities.map(city => {
                                return (
                                    <option key={city} value={city}>{city}</option>
                                )
                            })}
                        </select>
                    </div>

:<div></div>}</div>
            {breweries.filter(brewery => brewery.city.includes(selectedCity)).map(eachBrewery => {
                return (

                    <div key={eachBrewery.id} className="searchResults">

                        <p>{eachBrewery.name} <Link to={`/brewery/${eachBrewery.id}`}><button className="details">Details</button></Link></p>
                        <p>Address: {eachBrewery.street}, {eachBrewery.city}, {eachBrewery.state}</p>

                    </div>
                )
            })}
        </div>
    )
}
const remoteURL = "http://localhost:8088"


export const getBreweriesByStateAndCity = (state,city) =>{
    return fetch (`${remoteURL}/breweries/?state=${state}&city=${city}`)
    .then(response=>response.json())
}

export const getAllCities = (city) =>{
    return fetch (`${remoteURL}/breweries/city=${city}`)
    .then(response=>response.json())
}

export const getBreweriesByState=(state)=>{
    return fetch (`${remoteURL}/breweries/?state=${state}`)
    .then(response=>response.json())
}
export const getBreweriesByCity=(city)=>{
    return fetch (`${remoteURL}/breweries/?city=${city}`)
    .then(response=>response.json())
}

export const getBreweryById=(id)=>{
    return fetch (`${remoteURL}/breweries/${id}`)
    .then(response=>response.json())
}

export const getAllBreweries = () =>{
    return fetch (`${remoteURL}/breweries`)
    .then(response=>response.json())
}
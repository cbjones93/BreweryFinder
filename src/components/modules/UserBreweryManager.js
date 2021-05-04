const remoteURL = "http://localhost:8088"
const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const getUserBreweriesByBreweryId = (breweryId) => {
    return fetch (`${remoteURL}/userBreweries?breweryId=${breweryId}&_expand=user`)
    .then(response => response.json())
}
export const getUserBreweryRelationship = (breweryId, userId) =>{
    return fetch (`${remoteURL}/userBreweries?breweryId=${breweryId}&userId=${userId}`)
    .then(response => response.json())
}
export const AddNewUserBrewery = (newUserBrewery) =>{
    return fetch (`${remoteURL}/userBreweries`, {
        method: "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUserBrewery)
    }).then(response => response.json())
}

export const DeleteUserBrewery = (id) =>{
    return fetch (`${remoteURL}/userBreweries/${id}?_expand=user`, {
        method: "DELETE",
    })
    .then(response => response.json())
}
export const updateUserBrewery = (newUserBreweryObj) =>{
    return fetch (`${remoteURL}/userBreweries/${newUserBreweryObj.id}`, {
        method: "PUT",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUserBreweryObj)
    }).then(response => response.json())
}

export const getUserBreweryById = (id) =>{
    return fetch (`${remoteURL}/userBreweries?breweryId=${id}`) 
    .then(response => response.json())
}
export const getAllUserBreweries = (userId) =>{
    return fetch (`${remoteURL}/userbreweries/?userId=${userId}&_expand=brewery&_expand=user`)
    .then(response => response.json())
}

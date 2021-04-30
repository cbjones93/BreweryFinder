const remoteURL = "http://localhost:8088"
const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const getUserBreweriesByBreweryId = (breweryId) => {
    return fetch (`${remoteURL}/userBreweries?breweryId=${breweryId}&_expand=user`)
    .then(response => response.json())
}
export const getAllUserBreweries = () => {
    return fetch (`${remoteURL}/userBreweries`)
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
export const AddNewUserBreweryReview = (newUserBreweryReview) =>{
    return fetch (`${remoteURL}/userBreweries`, {
        method: "PUT",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUserBreweryReview)
    }).then(response => response.json())
}

export const getBrewerybyUserBreweryId = () =>{
    return fetch (`${remoteURL}/userbreweries/?&_expand=brewery&_expand=user`)
    .then(response => response.json())
}

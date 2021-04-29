const remoteURL = "http://localhost:8088"
const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const getUserBreweriesByBreweryId = (breweryId) => {
    return fetch (`${remoteURL}/userBreweries?breweryId=${breweryId}`)
    .then(response => response.json())
}
export const getAllUserBreweries = () => {
    return fetch (`${remoteURL}/userBreweries`)
    .then(response => response.json())
}
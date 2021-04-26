const remoteURL = "http://localhost:8088"
const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const getUsers = () =>{
    return fetch (`${remoteURL}/users`)
    .then(response => response.json())
}
export const getUserById =(userId) =>{
    return fetch (`${remoteURL}/users/${userId}`)
    .then(response => response.json())
}
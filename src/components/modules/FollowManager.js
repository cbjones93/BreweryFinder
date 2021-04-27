const remoteURL = "http://localhost:8088"
const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

export const getAllFollowing = (id) =>{
    return fetch (`${remoteURL}/follow/?currentUserId=${id}&_expand=user`)
    .then(result => result.json())
}

export const deleteFollowing = (id) =>{
    return fetch (`${remoteURL}/follow/${id}?_expand=user` , {
    method: "DELETE"
}).then(result => result.json())
}
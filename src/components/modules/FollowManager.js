const remoteURL = "http://localhost:8088"


export const getAllFollowing = (id) =>{
    return fetch (`${remoteURL}/follow/?currentUserId=${id}&_expand=user`)
    .then(result => result.json())
}

export const usersToFollow = () =>{
    return fetch (`${remoteURL}/users/?_embed=follow`)
    .then(response => response.json())
}
export const followUser = (newFollow) =>{
    return fetch (`${remoteURL}/follow`, {
        method: "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newFollow)
    }) .then(response => response.json())
}
export const deleteFollowing = (id) =>{
    return fetch (`${remoteURL}/follow/${id}?_expand=user` , {
    method: "DELETE"
}).then(result => result.json())
}

export const getAllFollowers = (id) =>{
    return fetch (`${remoteURL}/follow/?userId=${id}`)
    .then(response => response.json())
}

export const getUsers = () =>{
    return fetch (`${remoteURL}/users`)
    .then(response => response.json())
}
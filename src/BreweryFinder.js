import React, {useState} from 'react'
import {NavBar} from './nav/NavBar'
import {ApplicationViews} from './ApplicationViews'



export const BreweryFinder = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("app_user_id")!==null)
    const setAuthUser = (user) => {
        sessionStorage.setItem("app_user_name", JSON.stringify(user.name))
        setIsAuthenticated(sessionStorage.getItem("app_user_id") !== null)
    }
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("app_user_id") !== null)
    }
        return (
            <>
                <NavBar clearUser={clearUser} setAuthUser={setAuthUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
                <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
               
            </>
        )

}
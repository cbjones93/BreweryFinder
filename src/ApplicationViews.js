import React from "react"
import { Route } from 'react-router-dom'
import { Home } from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from './components/auth/Register'
import {BrewerySearch} from './components/breweries/BrewerySearch'

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    return (
<>

        <Route path ="/login">
        <Login setAuthUser={setAuthUser} />
        </Route>

        <Route path ="/register">
        <Register/>
        </Route>

        <Route exact path ="/">
            <Home setAuthUser={setAuthUser} />
        </Route>
        <Route path ="/brewerySearch">
            <BrewerySearch />
        </Route>
        </>
    )
}
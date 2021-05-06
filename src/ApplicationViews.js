import React from "react"
import { Route } from 'react-router-dom'
import { Home } from "./Home"
import { Login } from "./components/auth/Login"
import { Register } from './components/auth/Register'
import { BrewerySearch } from './components/breweries/BrewerySearch'
import { BreweryCard } from "./components/breweries/BreweryCard"
import { BreweryDetail } from "./components/breweries/BreweryDetailCardList"
import {FollowingList} from './components/follow/FollowList'
import {AddFollowList} from './components/follow/AddFollowList'
import { MyBreweryList } from "./components/mybreweries/MyBreweryList"
import {UserBreweryList} from './components/mybreweries/UserBreweryList'


export const ApplicationViews = ({ setAuthUser }) => {
    return (
        <>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser}/>
            </Route>

            <Route exact path="/">
                <Home setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/brewerySearch">
                <BrewerySearch />
            </Route>
            <Route path="/breweryCard">
                <BreweryCard />
            </Route>
            <Route exact path="/brewery/:breweryId(\d+)">
                <BreweryDetail />
            </Route>
            <Route exact path="/follow">
                <FollowingList />
            </Route>
            <Route path="/follow/add">
                <AddFollowList />
            </Route>
            <Route path="/mybreweries">
                <MyBreweryList />
            </Route>
            <Route exact path="/userbreweries/:targetedUser(\d+)">
                <UserBreweryList />
            </Route>
         
        </>
    )
}
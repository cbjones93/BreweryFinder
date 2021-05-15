import React from "react"
import { Link, useHistory } from "react-router-dom"
import './NavBar.css'
import BreweryLogo from '../components/images/BreweryLogo.png'

export const NavBar = ({setIsAuthenticated,isAuthenticated}) => {
    const history = useHistory()
    const currentUser = (sessionStorage.getItem("app_user_name"))
    
    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("app_user_id") !== null)
    }
    return (

        <ul className="navbar">
            <img className="logo" src={BreweryLogo} alt="logo" />
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar_search">
                <Link className="navbar__link" to="/brewerysearch">BreweryFinder</Link>
            </li>

            {isAuthenticated

                ?

                <div className="authenticatedNav">
                    
                    <div className="logout">
                        <li className="navbar__item">
                    <p className="helloUser">Hello, {currentUser.replace(/['"]+/g, '')}!</p>
                        <span className="navbar__link" onClick={handleLogout}> Logout </span>
                    </li> </div>
                    <li className="navbar_search">
                        <Link className="navbar__link" to="/follow">Following List</Link>
                    </li>  <li className="navbar_search">
                        <Link className="navbar__link" to="/mybreweries">My Breweries</Link>
                    </li>
                </div>

                : <div className="login"><li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li></div>


            }
        </ul>

    )
}
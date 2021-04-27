import React from "react"
import { Link, useHistory } from "react-router-dom"
import {getUserById} from '../components/modules/UserManager'
import './NavBar.css'
import BreweryLogo from '../components/images/BreweryLogo.png'

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()
    const handleLogout = () => {
        clearUser();
        history.push('/');
    }
    
//  const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
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
                <div className="logout"><li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li> </div>
                <li className="navbar_search">
                <Link className="navbar__link" to="/follow">Following List</Link>
            </li>
                </div>
                
                : <div className="login"><li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li></div>
                
                
            }
        </ul>
      
    )
}
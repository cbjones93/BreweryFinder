import React from "react"
import { Link, useHistory } from "react-router-dom"
import {getUserById} from '../components/modules/UserManager'
import './NavBar.css'


export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()
    const handleLogout = () => {
        clearUser();
        history.push('/');
    }
//  const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    return (
       
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>

            {isAuthenticated
           
                ?  <div className="logout"><li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li></div>
                : <div className="login"><li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li></div>
                
               
            }
        </ul>
      
    )
}
import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import './Home.css'
export const Home = () => {
    useEffect (() =>{

    }, []);
    return (
        <>
        <div className='homeDetails'>
            <h2> Brewery Finder</h2>
            <div className="home-intro">
                <p> Hello, and welcome to Brewery Finder! The excitement for craft brewing has exploded over the past few years and our goal is to help people find breweries in their area and find their favorite.</p><p>
                </p>
                <p>
                To start off, we recommend creating a profile, that way you can save breweries that interest you and make plans to visit them later. You can make a profile <Link className="navbar__link" to="/Register">Here</Link>
                </p>
                <p>
                When you have created your profile, you can start off with our BreweryFinder&trade;. </p>
                <p>After you select a state and a city, a list of breweries will be listed. You can click on a brewery to find out more information about it, as well as see reviews from other users to see if you would be interested in visiting.</p>
               <p>
               You can also follow other users to keep track of their favorite breweries as well as see their reviews from them. To follow a user you can either add them from a brewery's review section, or to search for them by name. To see your following list click Here
               </p>
               <p>
               Here you will be able to view the people you are following, as well
as see people that follow you, and you will have the option to follow them back. 
               </p>
               <p>
               We hope you can find amazing breweries and have fun! 
               </p>
                </div>
        </div>
        </>
    )
}
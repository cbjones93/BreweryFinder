import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
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
                </div>
        </div>
        </>
    )
}
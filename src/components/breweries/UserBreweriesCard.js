import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom';
import { ReviewForm } from "../mybreweries/BreweryReviewForm";
import { updateUserBrewery, getUserBreweryRelationship } from '../modules/UserBreweryManager'


export const UserBreweryCard = ({ brewery }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const [userToBrewery, setUserToBrewery] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    // const toggleVisited = breweryObj =>{
    //     const breweryToEdit = {...breweryObj}
    //     breweryToEdit.beenToBrewery= !breweryToEdit.beenToBrewery
    //     updateUserBrewery(breweryToEdit)
    //     .then(getUserBreweries)
    // }
    // get brewery user relationship into state
    useEffect(() => {
        getUserBreweryRelationship(brewery.id, currentUser).then(UsersFromAPI => {
            setUserToBrewery(UsersFromAPI);
            console.log(UsersFromAPI.beenToBrewery)
            setIsLoading(false);
        })
    }, [brewery])
    // console.log(userToBrewery[0].beenToBrewery)
    return (
        <>
        {userToBrewery[0]?.beenToBrewery === true ? 
           
            <div className="userBreweryCard">
            <div className="card-content">
                <h3>Your Review:</h3>
                <p>{userToBrewery[0].review}</p>
            </div>
        </div>
        :<div></div>}
        </>
    )    // if (userToBrewery.[0].beenToBrewery === true && userToBrewery[0].review.length > 0) {
    //     return (
    //         <div className="userBreweryCard">
    //             <div className="card-content">
    //                 <h3>Your Review:</h3>
    //                 <p>{userToBrewery.review}</p>
    //             </div>
    //         </div>
    //     )
    // }
    // else {
    //     <div>test</div>
    // }

    // if (user.beenToBrewery === true && user.review.length > 0 && user.userId === currentUser) {
    //     return (
    //         <div className="userBreweryCard">
    //             <div className="card-content">
    //                 <h3>Your Review:</h3>
    //                 <p>{user.review}</p>
    //             </div>
    //         </div>
    //     )
    // }
    // else if (user.beenToBrewery === true && user.userId ===currentUser && (!(user.review.length >0))){
    //     <ReviewForm />
    // }
    // else if (user.beenToBrewery === false && user.userId === currentUser) {
    //     return (
    //         <>
    //         <button className="buttonChangeToFalse" type="button" onClick={() => toggleVisited(user)}>{user.beenToBrewery?"I've not been here yet": "I've been here!"  }</button>
    //     </>
    //     )
    // }

    // else{
    //     return (

    //         <div>
    //         <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesIveBeen(user.breweryId)}>I've been here!</button>
    //         <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesToVisit(user.breweryId)}>I wanna go here!</button>
    //         </div>
    //     )
    // }
}

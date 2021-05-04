import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams } from 'react-router-dom';
import { ReviewForm } from "../mybreweries/BreweryReviewForm";
import { updateUserBrewery, getUserBreweryRelationship, getUserBreweries, DeleteUserBrewery } from '../modules/UserBreweryManager'



export const UserBreweryCard = ({ brewery, getUserBreweries, handleAddToBreweriesIveBeen, handleAddToBreweriesToVisit }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const [userToBrewery, setUserToBrewery] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const { breweryId } = useParams();
    const history = useHistory();

    const handleDeleteReview = (reviewObj) => {
        const deleteReview = {...reviewObj}
        deleteReview.review = ""
        updateUserBrewery(deleteReview)
            .then(getUserBreweries).then(getAndSetUserBreweryRelationship)
    }
    const toggleVisited = breweryObj => {

        const breweryToEdit = { ...breweryObj }
        breweryToEdit.beenToBrewery = !breweryToEdit.beenToBrewery
        updateUserBrewery(breweryToEdit)
            .then(getUserBreweries).then(getAndSetUserBreweryRelationship)
    }
    // get brewery user relationship into state
    useEffect(() => {
        getAndSetUserBreweryRelationship()
    }, [brewery])

    const getAndSetUserBreweryRelationship = () => {
        return getUserBreweryRelationship(brewery.id, currentUser).then(UsersFromAPI => {
            setUserToBrewery(UsersFromAPI);
            console.log(UsersFromAPI[0]?.beenToBrewery)
            setIsLoading(false);
        }
        )
    }
    // console.log(userToBrewery[0].beenToBrewery)
    if (userToBrewery[0]?.review.length > 0) {
        return (
            <>
                <div className="userBreweryCard">
                    <div className="card-content">
                        <h3>Your Review:</h3>
                        <p>{userToBrewery[0].review} </p>
                        <button className="deleteReview" type="button" onClick={() => handleDeleteReview(userToBrewery[0])}>Delete Review</button>
                    </div>
                </div>
            </>
        )
    }
    else if (userToBrewery[0]?.beenToBrewery===true) {
        return (
            <div>Looks like you've been here! Would you like to leave a review?
                <ReviewForm
                    getAndSetUserBreweryRelationship={getAndSetUserBreweryRelationship}
                    userBrewery={userToBrewery[0]} />
                <button className="addToFavorites" type="button" onClick={() => toggleVisited(userToBrewery[0])}>I haven't been here yet</button>
            </div>
        )
    }

    else if (userToBrewery[0]) {
        return (
            <>
                <button className="addToFavorites" type="button" onClick={() =>toggleVisited(userToBrewery[0])}>I've been here!</button>

            </>
        )
    }

    else {
        return (
            <>
                <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesIveBeen(userToBrewery[0])}>I've been here!</button>
                <button className="addToFavorites" type="button" onClick={() => handleAddToBreweriesToVisit(userToBrewery[0])}>I wanna go here!</button>
            </>
        )
    }





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

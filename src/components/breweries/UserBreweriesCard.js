import React, { useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import { ReviewForm } from "../mybreweries/BreweryReviewForm";
import { updateUserBrewery, getUserBreweryRelationship, AddNewUserBrewery } from '../modules/UserBreweryManager'


import "./Review.css"



export const UserBreweryCard = ({ brewery, getUserBreweries }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const { breweryId } = useParams();

    //useState//
    const [userToBrewery, setUserToBrewery] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false)


    // Handle Buttons//
    const handleAddToBreweriesToVisit = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": false,
            "review": ""
        }
        AddNewUserBrewery(newUserBreweryObject)
        window.alert("Added to your 'Places I Wanna Go' ")
        getAndSetUserBreweryRelationship()
    }
    const handleAddToBreweriesIveBeen = () => {
        const newUserBreweryObject = {
            "userId": currentUser,
            "breweryId": breweryId,
            "beenToBrewery": true,
            "review": ""
        }
        AddNewUserBrewery(newUserBreweryObject)
            .then(window.alert("Added to your 'Places I've Been'"))
            getAndSetUserBreweryRelationship()
    }

    const toggleForm = (event) => {
        setIsFormVisible(!isFormVisible)
    }
    const handleDeleteReview = (reviewObj) => {
        const deleteReview = { ...reviewObj }
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
        return getUserBreweryRelationship(brewery.id, currentUser)
            .then(UsersFromAPI => {
                setUserToBrewery(UsersFromAPI);
                setIsLoading(false);
            }
            )
    }

    if (userToBrewery[0]?.review.length > 0) {
        return (
            <>
                <div className="userBreweryCard">
                    <div className="card-content">
                        <h3>Your Review:</h3>
                        <p>{userToBrewery[0].review} </p>

                        <button className="deleteReview" type="button" onClick={() => handleDeleteReview(userToBrewery[0])}>Delete Review</button>
                        <button onClick={toggleForm}>Edit Review</button>
                        <div className={`review ${isFormVisible ? "active" : "inactive"}`}><ReviewForm
                            getAndSetUserBreweryRelationship={getAndSetUserBreweryRelationship}
                            userBrewery={userToBrewery[0]}
                            toggleForm={toggleForm} />
                        </div>
                      
                    </div>
                </div>
            </>
        )
    }
    else if (userToBrewery[0]?.beenToBrewery === true) {
        return (
            <div>Looks like you've been here! Would you like to leave a review?
                <ReviewForm
                    getAndSetUserBreweryRelationship={getAndSetUserBreweryRelationship}
                    userBrewery={userToBrewery[0]}
                    toggleForm={toggleForm} />
                <button className="addToFavorites" type="button" onClick={() => toggleVisited(userToBrewery[0])}>I haven't been here yet</button>
            </div>
        )
    }

    else if (userToBrewery[0]) {
        return (
            <>
                <button className="addToFavorites" type="button" onClick={() => toggleVisited(userToBrewery[0])}>I've been here!</button>

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
}

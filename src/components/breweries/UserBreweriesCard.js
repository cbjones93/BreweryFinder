import React, { useEffect, useState, useRef } from "react"
import { Link, useHistory, useParams } from 'react-router-dom';
import { ReviewForm } from "../mybreweries/BreweryReviewForm";
import { updateUserBrewery, getUserBreweryRelationship, getUserBreweries, DeleteUserBrewery } from '../modules/UserBreweryManager'
import { useDetectClick } from "../modules/Helper"
import "./Review.css"



export const UserBreweryCard = ({ brewery, getUserBreweries,handleAddToBreweriesIveBeen, handleAddToBreweriesToVisit }) => {
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));
    const reviewRef = useRef(null)
    const [isActive, setIsActive] = useDetectClick(reviewRef, false);
    const onClick = () => setIsActive(!isActive);
    const [userToBrewery, setUserToBrewery] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const { breweryId } = useParams();
    const history = useHistory();

    const [isFormVisible,setIsFormVisible] = useState(false)
    const toggleForm = (event) =>{
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
                        <button onClick={toggleForm}>Edit Review</button>
                        <div className={`review ${isFormVisible ? "active" : "inactive"}`}><ReviewForm
                         getAndSetUserBreweryRelationship={getAndSetUserBreweryRelationship}
                         userBrewery={userToBrewery[0]}
                         toggleForm={toggleForm} />
                         </div>
                        {/* <button onClick={onClick}>Edit Review</button>
                        <div ref={reviewRef} className={`review ${isActive ? "active" : "inactive"}`}><ReviewForm /></div> */}
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

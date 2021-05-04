import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {StarRating} from '../breweries/StarRating'
import {updateUserBrewery, getUserBreweryById} from '../modules/UserBreweryManager'

export const ReviewForm = ({userBrewery, getAndSetUserBreweryRelationship, toggleForm}) =>{
    const [review, setReview] = useState(userBrewery.review? userBrewery.review : "");
    const [isLoading, setIsLoading]= useState(false)
    const history = useHistory();
    const {breweryId} = useParams();

    const handleFieldChange = event =>{
        let stateToChange = review.slice()
        stateToChange=event.target.value;
        setReview(stateToChange)
    }
    const createReview = event =>{
        event.preventDefault();
            setIsLoading(true);
           const copyUserBrewery ={...userBrewery}
           copyUserBrewery.review=review
            updateUserBrewery(copyUserBrewery)
            .then(getAndSetUserBreweryRelationship)
            .then(()=>{
                toggleForm()
                setIsLoading(false)
            })
        

        }

        // useEffect(()=>{
        //     getUserBreweryById(breweryId).then(userBrewery=>{
        //         setReview(userBrewery)
        //     })
        // }, [breweryId])
    // console.log(review)
    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    {/* <label htmlFor="rating">Rating
                    <StarRating /></label> */}
                    <label htmlFor="review">Review</label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="review"
                    value={review}
                     />
                </div>
                <div className="submit">
                    <button 
                    type="button"
                    disabled={isLoading}
                    onClick={createReview}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}
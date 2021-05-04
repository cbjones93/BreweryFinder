import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {StarRating} from '../breweries/StarRating'
import {updateUserBrewery, getUserBreweryById} from '../modules/UserBreweryManager'

export const ReviewForm = () =>{
    const [review, setReview] = useState({
    });
    const [isLoading, setIsLoading]= useState(false)
    const history = useHistory();
    const {breweryId} = useParams();

    const handleFieldChange = event =>{
        const stateToChange = {...event};
        stateToChange[event.target.id]=event.target.value;
        setReview(stateToChange)
    }
    const createReview = event =>{
        event.preventDefault();
            setIsLoading(true);
            const createdReview = {
                review: review.review
            }
            updateUserBrewery(createdReview)
            .then(()=>history.push("favorites"))
        }

        useEffect(()=>{
            getUserBreweryById(breweryId).then(userBrewery=>{
                setReview(userBrewery)
            })
        }, [breweryId])
    console.log(review)
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
                    value={review.review}
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
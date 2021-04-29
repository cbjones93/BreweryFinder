import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {StarRating} from '../breweries/StarRating'
import {AddNewUserBreweryReview} from '../modules/UserBreweryManager'

export const ReviewForm = () =>{
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading]= useState(false)
    const history = useHistory();

    const handleFieldChange = event =>{
        const stateToChange = {...event};
        stateToChange[event.target.id]=event.target.value;
        setReview(stateToChange)
    }
    const createReview = event =>{
        event.preventDefault();
            setIsLoading(true);
            AddNewUserBreweryReview(event)
            .then(()=>history.push("favorites"))
        }
    
    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <label htmlFor="rating">Rating
                    <StarRating /></label>
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
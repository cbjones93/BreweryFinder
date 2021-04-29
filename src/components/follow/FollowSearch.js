import React from 'react';
import {Link} from 'react-router-dom'

export const SearchBar= ({handleAddFollow, search}) =>{
    return (
        <div className="searchBox">
            <h3>{search.name}</h3>
            <Link to={`/follow`}><button type="button" className="searchButton" onClick={()=>handleAddFollow(search.id)}> Follow User</button></Link>
        </div>
    )
}
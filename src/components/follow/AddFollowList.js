import React, { useState, useEffect } from 'react';
import {usersToFollow, followUser} from '../modules/FollowManager'
import {SearchBar} from './FollowSearch'

export const AddFollowList= ()=>{

    const [search, setSearch] = useState(" ");
    const [result, setResult]= useState([])
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"));

    const handleSearch = event =>{
        let searchChange=event.target.value
        setSearch(searchChange.toLowerCase())
    }
    const searchResults = (search) =>{
        if (search.length >0) {
            usersToFollow()
            .then(response =>{
                let searchFollows=response.filter(user =>{
                    if(user.name.toLowerCase().includes(search) && user.id !== currentUser){
                        return true
                    }
                })
                setResult(searchFollows)
            })
        }
        else setResult([])
    }
    useEffect(()=>{
        searchResults(search)
    }, [search])
   
    return (
        <div className="container-cards">
            <div className="searchBox">
                <input type="text"
                    id="search"
                    className="searchFollowBox"
                    required
                    onChange={handleSearch}
                    placeholder="Search Users to follow!"
                />
            </div>
            <div className="searchResults">
                {result.length === 0 ? <div></div> :
                    result.map(search =>
                        <SearchBar
                            key={search.id}
                            search={search}
                            // handleAddFollow={handleAddFollow}
                        />
                    )}
            </div>
          
        </div>
    )
}
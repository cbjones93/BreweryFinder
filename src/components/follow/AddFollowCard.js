import React from 'react';
import { useHistory } from 'react-router-dom'
export const AddFollowCard = ({user, handleAddFollow}) => {
    const currentUser = user.follow;
    console.log(currentUser)
    const history = useHistory();
    return (
        <div className="follow-card">
            <div className="card-content">
                <h3>
                    <span className="userCardName">{user.name}</span>
                    <p className="userCardName">{user.email}</p>
                </h3>
            </div>
        </div>
    
    )
}